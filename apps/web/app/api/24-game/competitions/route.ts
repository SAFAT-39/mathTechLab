import { NextRequest, NextResponse } from "next/server";

// Mock data - replace with actual database queries
const mockCompetitions = [
  {
    id: "1",
    name: "Weekly Challenge #1",
    description: "Solve 10 puzzles as fast as you can!",
    startDate: new Date().toISOString(),
    endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    puzzleIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    participantCount: 42,
  },
  {
    id: "2",
    name: "Speed Master",
    description: "Fastest solver wins!",
    startDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    endDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(),
    puzzleIds: [11, 12, 13, 14, 15],
    participantCount: 28,
  },
  {
    id: "3",
    name: "Math Masters Tournament",
    description: "The ultimate 24 game challenge",
    startDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(),
    endDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toISOString(),
    puzzleIds: [16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
    participantCount: 0,
  },
];

export async function GET(req: NextRequest) {
  try {
    // In production, fetch from database
    return NextResponse.json({ competitions: mockCompetitions });
  } catch (error) {
    console.error("Error fetching competitions:", error);
    return NextResponse.json(
      { error: "Failed to fetch competitions" },
      { status: 500 }
    );
  }
}

