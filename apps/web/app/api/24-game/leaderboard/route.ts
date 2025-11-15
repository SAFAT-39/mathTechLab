import { NextRequest, NextResponse } from "next/server";
import { getDb } from "../../../utils/mongodb";
import { authOptions } from "../../auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

/**
 * GET /api/leaderboard?page=1&limit=10
 * Returns ranked leaderboard with pagination
 */
export async function GET(req: NextRequest) {
  try {
    const db = await getDb();
    const leaderboard = db.collection("24-game_leaderboard");

    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const skip = (page - 1) * limit;

    const total = await leaderboard.countDocuments();

    const data = await leaderboard
      .aggregate([
        {
          $project: {
            username: 1,
            puzzleIds: 1,
            solved: { $size: "$puzzleIds" },
            updatedAt: 1,
          },
        },
        { $sort: { solved: -1, updatedAt: 1 } }, // rank priority
        { $skip: skip },
        { $limit: limit },
      ])
      .toArray();

    // Add rank field
    let rankOffset = skip + 1;
    const ranked = data.map((entry, i) => ({
      rank: rankOffset + i,
      username: entry.username,
      solved: entry.solved,
      puzzleIds: entry.puzzleIds,
      updatedAt: entry.updatedAt,
    }));

    return NextResponse.json({
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
      leaderboard: ranked,
    });
  } catch (error) {
    console.error("Error fetching leaderboard:", error);
    return NextResponse.json(
      { error: "Failed to fetch leaderboard" },
      { status: 500 }
    );
  }
}

/**
 * POST /api/leaderboard
 * Add puzzleId for a user if not solved before
 */
export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return NextResponse.json(
        { error: "Unauthorized: Please login first." },
        { status: 401 }
      );
    }

    const { username, puzzleId } = await req.json();
    if (!username || puzzleId == null) {
      return NextResponse.json({ error: "Invalid body" }, { status: 400 });
    }

    if (!username || !puzzleId) {
      return NextResponse.json(
        { error: "username and puzzleId are required" },
        { status: 400 }
      );
    }

    const db = await getDb();
    const leaderboard = db.collection("24-game_leaderboard");

    // Update only if puzzleId not already present
    await leaderboard.updateOne(
      { username },
      {
        $addToSet: { puzzleIds: puzzleId },
        $set: { updatedAt: new Date() },
      },
      { upsert: true }
    );

    return NextResponse.json(
      { message: "Leaderboard updated" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating leaderboard:", error);
    return NextResponse.json(
      { error: "Failed to update leaderboard" },
      { status: 500 }
    );
  }
}
