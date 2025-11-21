// utils/updateLeaderboard.ts
export async function updateGlobalLeaderboard({
  puzzleId,
}: {
  puzzleId: number;
}) {

  try {
    const res = await fetch("/api/24-game/leaderboard", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ puzzleId }),
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
