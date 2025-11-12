"use client";

export interface LeaderboardEntry {
  rank: number;
  username: string;
  score: number;
  time?: number; // in seconds
  solved?: number;
}

interface LeaderboardProps {
  entries: LeaderboardEntry[];
  title?: string;
  isLoading?: boolean;
}

export default function Leaderboard({
  entries,
  title = "Leaderboard",
  isLoading = false,
}: LeaderboardProps) {
  if (isLoading) {
    return (
      <div className="bg-white rounded-lg shadow-md p-4">
        <h3 className="text-xl font-bold mb-4 text-gray-800">{title}</h3>
        <div className="text-center py-8 text-gray-500">Loading...</div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-xl font-bold mb-4 text-gray-800">{title}</h3>
      {entries.length === 0 ? (
        <div className="text-center py-8 text-gray-500">No entries yet</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-2 px-3 font-semibold text-gray-700">
                  Rank
                </th>
                <th className="text-left py-2 px-3 font-semibold text-gray-700">
                  Username
                </th>
                <th className="text-right py-2 px-3 font-semibold text-gray-700">
                  Score
                </th>
                {/* Removed Time column */}
                {entries[0]?.solved !== undefined && (
                  <th className="text-right py-2 px-3 font-semibold text-gray-700">
                    Solved
                  </th>
                )}
              </tr>
            </thead>
            <tbody>
              {entries.map((entry, index) => (
                <tr
                  key={index}
                  className={`border-b border-gray-100 ${
                    entry.rank <= 3 ? "bg-yellow-50" : ""
                  }`}
                >
                  <td className="py-2 px-3">
                    <span className="font-semibold">
                      {entry.rank === 1 && "🥇"}
                      {entry.rank === 2 && "🥈"}
                      {entry.rank === 3 && "🥉"}
                      {entry.rank > 3 && `#${entry.rank}`}
                    </span>
                  </td>
                  <td className="py-2 px-3 font-medium text-gray-800">
                    {entry.username}
                  </td>
                  <td className="py-2 px-3 text-right font-semibold text-gray-800">
                    {entry.score.toLocaleString()}
                  </td>
                  {/* Removed Time cell */}
                  {entry.solved !== undefined && (
                    <td className="py-2 px-3 text-right text-gray-600">
                      {entry.solved}
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
