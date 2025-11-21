import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/utils/mongodb";
import { auth } from "@/lib/better-auth";
import { headers } from "next/headers";

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
            userId: 1,
            name: 1,
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
      userId: entry.userId,
      name: entry.name,
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
    const session = await auth.api.getSession({
      headers: await headers() // you need to pass the headers object.
    })

    if (!session || !session.user) {
      return NextResponse.json(
        { error: "Unauthorized: Please login first." },
        { status: 401 }
      );
    }

    const { puzzleId } = await req.json();
    if (!puzzleId) {
      return NextResponse.json({ error: "Invalid body" }, { status: 400 });
    }


    const db = await getDb();
    const leaderboard = db.collection("24-game_leaderboard");

    // Update only if puzzleId not already present
    await leaderboard.updateOne(
      { userId: session.user.id },
      {
        $addToSet: { puzzleIds: puzzleId },
        $set: { updatedAt: new Date() },
        $setOnInsert: { userId: session.user.id, name: session.user.name },
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
