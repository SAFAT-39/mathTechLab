"use client";

interface CompetitionStatsProps {
  totalPuzzles: number;
  solvedCount: number;
  timeElapsed: number; // in seconds
  onClose?: () => void;
}

export default function CompetitionStats({
  totalPuzzles,
  solvedCount,
  timeElapsed,
  onClose,
}: CompetitionStatsProps) {
  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  const accuracy = totalPuzzles > 0 ? ((solvedCount / totalPuzzles) * 100).toFixed(1) : "0";
  const averageTime = solvedCount > 0 ? (timeElapsed / solvedCount).toFixed(1) : "0";

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full mx-4">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Competition Complete!
        </h2>
        
        <div className="space-y-4">
          <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
            <span className="text-lg font-semibold text-gray-700">Puzzles Solved:</span>
            <span className="text-2xl font-bold text-blue-600">
              {solvedCount} / {totalPuzzles}
            </span>
          </div>

          <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
            <span className="text-lg font-semibold text-gray-700">Accuracy:</span>
            <span className="text-2xl font-bold text-green-600">{accuracy}%</span>
          </div>

          <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg">
            <span className="text-lg font-semibold text-gray-700">Time Elapsed:</span>
            <span className="text-2xl font-bold text-purple-600">{formatTime(timeElapsed)}</span>
          </div>

          {solvedCount > 0 && (
            <div className="flex justify-between items-center p-4 bg-orange-50 rounded-lg">
              <span className="text-lg font-semibold text-gray-700">Avg Time per Puzzle:</span>
              <span className="text-2xl font-bold text-orange-600">{averageTime}s</span>
            </div>
          )}
        </div>

        {onClose && (
          <button
            onClick={onClose}
            className="mt-6 w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
          >
            Close
          </button>
        )}
      </div>
    </div>
  );
}

