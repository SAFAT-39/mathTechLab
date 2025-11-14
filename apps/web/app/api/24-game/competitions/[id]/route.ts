import { NextRequest, NextResponse } from "next/server";
import { getDb } from "../../../../utils/mongodb";
import { ObjectId } from "mongodb";

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
