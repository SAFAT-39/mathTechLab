import { NextRequest, NextResponse } from "next/server";
import { getDb } from "../../../../utils/mongodb";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../auth/[...nextauth]/route";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const db = await getDb();
    const competitions = db.collection("competitions");

    // ---- Fetch the competition ----
    const competition = await competitions.findOne({
      _id: new ObjectId(id),
    });

    if (!competition) {
      return NextResponse.json(
        { error: "Competition not found" },
        { status: 404 }
      );
    }

    // ---- Format leaderboard with rank ----
    const leaderboard = (competition.leaderboard || [])
      .sort((a: any, b: any) => b.score - a.score)
      .map((entry: any, index: number) => ({
        rank: index + 1,
        username: entry.username,
        score: entry.score,
        time: entry.time,
        solved: entry.solved,
      }));

    return NextResponse.json({
      competition: {
        id: competition._id.toString(),
        name: competition.name,
        description: competition.description,
        startDate: competition.startDate,
        endDate: competition.endDate,
        puzzleIds: competition.puzzleIds,
      },
      leaderboard,
    });
  } catch (error) {
    console.error("Error fetching competition:", error);
    return NextResponse.json(
      { error: "Failed to fetch competition" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const db = await getDb();
    await db
      .collection("competitions")
      .deleteOne({ _id: new ObjectId(params.id) });

    return NextResponse.json({ message: "Deleted" });
  } catch (e) {
    return NextResponse.json({ error: "Failed to delete" }, { status: 500 });
  }
}

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.username) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const username = session.user.username;
    const { time, solvedPuzzleIds } = await req.json();
    const { id } = await params;

    if (
      !time ||
      !Array.isArray(solvedPuzzleIds) ||
      solvedPuzzleIds.length === 0
    ) {
      return NextResponse.json(
        { error: "time and solvedPuzzleIds are required" },
        { status: 400 }
      );
    }

    const db = await getDb();
    const competitions = db.collection("competitions");

    const competition = await competitions.findOne({ _id: new ObjectId(id) });

    if (!competition) {
      return NextResponse.json(
        { error: "Competition not found" },
        { status: 404 }
      );
    }

    let leaderboard = competition.leaderboard || [];

    // --- Check if entry already exists ---
    const exists = leaderboard.some(
      (entry: any) => entry.username === username
    );

    if (exists) {
      return NextResponse.json(
        { message: "Entry already exists — cannot update again" },
        { status: 409 }
      );
    }

    // --- Insert new entry ---
    leaderboard.push({
      username,
      time,
      solvedPuzzleIds: Array.from(new Set(solvedPuzzleIds)), // ensure unique
      createdAt: new Date(),
    });

    // --- Rank leaderboard (descending solved count, then ascending time) ---
    const sorted = leaderboard
      .map((entry: any) => ({
        ...entry,
        solved: entry.solvedPuzzleIds.length,
      }))
      .sort((a: any, b: any) => {
        if (b.solved !== a.solved) return b.solved - a.solved;
        return a.time - b.time;
      })
      .map((entry: any, index: number) => ({
        rank: index + 1,
        username: entry.username,
        time: entry.time,
        solvedPuzzleIds: entry.solvedPuzzleIds,
        solved: entry.solved,
      }));

    // --- Save leaderboard back to DB ---
    await competitions.updateOne(
      { _id: new ObjectId(id) },
      { $set: { leaderboard: sorted } }
    );

    return NextResponse.json(
      { message: "Leaderboard entry created", leaderboard: sorted },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error updating competition leaderboard:", error);
    return NextResponse.json(
      { error: "Failed to update leaderboard" },
      { status: 500 }
    );
  }
}
