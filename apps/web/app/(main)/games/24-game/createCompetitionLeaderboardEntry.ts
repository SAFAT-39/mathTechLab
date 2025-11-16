interface CreateLeaderboardEntryParams {
  competitionId: string;
  time: number; // total time for puzzles solved
  solvedPuzzleIds: number[]; // array of puzzle IDs solved
}

/**
 * Call API to create a leaderboard entry for a competition.
 */
export async function createCompetitionLeaderboardEntry({
  competitionId,
  time,
  solvedPuzzleIds,
}: CreateLeaderboardEntryParams) {
  try {
    const res = await fetch(`/api/24-game/competitions/${competitionId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ time, solvedPuzzleIds }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || "Failed to create leaderboard entry");
    }

    return data; // { message: "...", leaderboard: [...] }
  } catch (error) {
    console.error("Error creating leaderboard entry:", error);
    throw error;
  }
}
