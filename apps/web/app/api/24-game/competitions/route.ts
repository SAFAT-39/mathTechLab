import { NextRequest, NextResponse } from "next/server";
import { getDb } from "../../../utils/mongodb";
import { ObjectId } from "mongodb";

/**
 * GET /api/competitions?page=&limit=
 * Paginated competitions list
 */
export async function GET(req: NextRequest) {
  try {
    const db = await getDb();
    const competitions = db.collection("competitions");

    // Extract pagination params
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");

    const skip = (page - 1) * limit;

    const total = await competitions.countDocuments();

    // Fetch competitions with leaderboard size
    const data = await competitions
      .aggregate([
        { $sort: { createdAt: -1 } },
        { $skip: skip },
        { $limit: limit },
        {
          $project: {
            name: 1,
            description: 1,
            puzzleIds: 1,
            startDate: 1,
            endDate: 1,
            createdAt: 1,
            leaderboardCount: { $size: "$leaderboard" },
          },
        },
      ])
      .toArray();

    return NextResponse.json({
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
      competitions: data,
    });
  } catch (error) {
    console.error("Error fetching competitions:", error);
    return NextResponse.json(
      { error: "Failed to fetch competitions" },
      { status: 500 }
    );
  }
}

/**
 * POST /api/competitions
 * Body: { name, description, puzzleCount, durationDays }
 */
export async function POST(req: NextRequest) {
  try {
    const {
      name,
      description,
      puzzleCount,
      time = 10,
      durationDays = 7,
    } = await req.json();

    if (!name || !description || !puzzleCount) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const db = await getDb();
    const competitions = db.collection("competitions");

    // --- Generate Random Puzzle IDs ---
    const puzzleIds = [];
    for (let i = 0; i < puzzleCount; i++) {
      puzzleIds.push(Math.floor(Math.random() * 1000) + 1); // Example range: 1–1000
    }

    const now = new Date();
    const end = new Date(now.getTime() + durationDays * 24 * 60 * 60 * 1000);

    const newCompetition = {
      name,
      description,
      puzzleIds,
      leaderboard: [], // <-- Added leaderboard array
      time,
      durationDays,
      startDate: now.toISOString(),
      endDate: end.toISOString(),
      createdAt: now,
    };

    const result = await competitions.insertOne(newCompetition);

    return NextResponse.json(
      { message: "Competition created", id: result.insertedId },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating competition:", error);
    return NextResponse.json(
      { error: "Failed to create competition" },
      { status: 500 }
    );
  }
}
