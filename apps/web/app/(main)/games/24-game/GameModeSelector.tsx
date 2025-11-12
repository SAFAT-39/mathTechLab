"use client";

interface GameModeSelectorProps {
  mode: "puzzle" | "competition";
  onModeChange: (mode: "puzzle" | "competition") => void;
}

export default function GameModeSelector({
  mode,
  onModeChange,
}: GameModeSelectorProps) {
  return (
    <div className="flex gap-2">
      <button
        onClick={() => onModeChange("puzzle")}
        className={`px-4 py-2 rounded-lg font-semibold transition-colors ${mode === "puzzle"
          ? "bg-blue-600 text-white"
          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
      >
        Puzzle Mode
      </button>
      <button
        onClick={() => onModeChange("competition")}
        className={`px-4 py-2 rounded-lg font-semibold transition-colors ${mode === "competition"
          ? "bg-blue-600 text-white"
          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
      >
        Competition Mode
      </button>
    </div>
  );
}
