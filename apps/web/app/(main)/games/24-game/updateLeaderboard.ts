// utils/updateLeaderboard.ts
export async function updateGlobalLeaderboard({
  username,
  puzzleId,
}: {
  username: string | null | undefined;
  puzzleId: number;
}) {
  if (!username) {
    console.warn("User not logged in — leaderboard not updated.");
    return;
  }

  try {
    const res = await fetch("/api/24-game/leaderboard", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, puzzleId }),
    });

    if (!res.ok) {
      const error = await res.json();
      console.error(
        "Leaderboard update failed:",
        error?.error || res.statusText
      );
      return;
    }

    console.log("Leaderboard successfully updated.");
  } catch (err) {
    console.error("Network/Server error updating leaderboard:", err);
  }
}
