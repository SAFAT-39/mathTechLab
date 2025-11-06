'use client'
import { useSearchParams } from "next/navigation";
import { Suspense } from 'react';

import Game from "./Game";

// Component that uses useSearchParams - must be wrapped in Suspense
const GameWithParams = () => {
  const searchParams = useSearchParams();
  const encodedPuzzleId = searchParams.get('id');

  // Decoding constants - must match encoding constants
  const DECODE_MULTIPLIER = 47382;
  const DECODE_SUBTRACTION = 91627;

  const decodePuzzleIndex = (encoded: string): number | undefined => {
    const encodedNum = parseInt(encoded, 10);
    if (isNaN(encodedNum)) return undefined;
    // Decode: (encoded - DECODE_SUBTRACTION) / DECODE_MULTIPLIER
    const decoded = (encodedNum - DECODE_SUBTRACTION) / DECODE_MULTIPLIER;
    // Check if the decoded value is a valid integer
    if (Number.isInteger(decoded) && decoded >= 0) {
      return decoded;
    }
    return undefined;
  };

  const puzzleId = encodedPuzzleId ? decodePuzzleIndex(encodedPuzzleId) : undefined;

  return <Game initialPuzzleId={puzzleId} />;
};

const GameWraper = () => {
  return (
    <Suspense fallback={
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
        <div className="text-white">Loading...</div>
      </main>
    }>
      <GameWithParams />
    </Suspense>
  )
}

export default GameWraper;