import { NextRequest, NextResponse } from "next/server";

// Mock data - replace with actual database queries
const mockGlobalLeaderboard = [
  { rank: 1, username: "MathMaster", score: 1200, time: 600, solved: 50 },
  { rank: 2, username: "NumberKing", score: 1150, time: 650, solved: 48 },
  { rank: 3, username: "PuzzleChamp", score: 1100, time: 700, solved: 46 },
  { rank: 4, username: "BrainBuster", score: 1050, time: 750, solved: 44 },
  { rank: 5, username: "QuickMath", score: 1000, time: 800, solved: 42 },
  { rank: 6, username: "SolveIt", score: 950, time: 850, solved: 40 },
  { rank: 7, username: "MathGenius", score: 900, time: 900, solved: 38 },
  { rank: 8, username: "NumberPro", score: 850, time: 950, solved: 36 },
  { rank: 9, username: "PuzzleSolver", score: 800, time: 1000, solved: 34 },
  { rank: 10, username: "FastThinker", score: 750, time: 1050, solved: 32 },
];

export async function GET(req: NextRequest) {
  try {
    // In production, fetch from database
    return NextResponse.json({ leaderboard: mockGlobalLeaderboard });
  } catch (error) {
    console.error("Error fetching leaderboard:", error);
    return NextResponse.json(
      { error: "Failed to fetch leaderboard" },
      { status: 500 }
    );
  }
}

