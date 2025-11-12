import { NextRequest, NextResponse } from "next/server";

// Mock data - replace with actual database queries
const mockCompetitionData: Record<
  string,
  {
    competition: {
      id: string;
      name: string;
      description?: string;
      startDate: string;
      endDate: string;
      puzzleIds: number[];
    };
    leaderboard: Array<{
      rank: number;
      username: string;
      score: number;
      time?: number;
      solved?: number;
    }>;
  }
> = {
  "1": {
    competition: {
      id: "1",
      name: "Weekly Challenge #1",
      description: "Solve 10 puzzles as fast as you can!",
      startDate: new Date().toISOString(),
      endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
      puzzleIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    leaderboard: [
      { rank: 1, username: "MathWizard", score: 240, time: 120, solved: 10 },
      { rank: 2, username: "NumberNinja", score: 216, time: 135, solved: 9 },
      { rank: 3, username: "PuzzlePro", score: 192, time: 150, solved: 8 },
      { rank: 4, username: "QuickSolve", score: 168, time: 165, solved: 7 },
      { rank: 5, username: "BrainTeaser", score: 144, time: 180, solved: 6 },
    ],
  },
  "2": {
    competition: {
      id: "2",
      name: "Speed Master",
      description: "Fastest solver wins!",
      startDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
      endDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
      puzzleIds: [11, 12, 13, 14, 15],
    },
    leaderboard: [
      { rank: 1, username: "SpeedDemon", score: 120, time: 60, solved: 5 },
      { rank: 2, username: "FastMath", score: 96, time: 75, solved: 4 },
      { rank: 3, username: "QuickThinker", score: 72, time: 90, solved: 3 },
    ],
  },
  "3": {
    competition: {
      id: "3",
      name: "Math Masters Tournament",
      description: "The ultimate 24 game challenge",
      startDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(),
      endDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toISOString(),
      puzzleIds: [16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
    },
    leaderboard: [],
  },
};

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const data = mockCompetitionData[id];

    if (!data) {
      return NextResponse.json(
        { error: "Competition not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching competition data:", error);
    return NextResponse.json(
      { error: "Failed to fetch competition data" },
      { status: 500 }
    );
  }
}

