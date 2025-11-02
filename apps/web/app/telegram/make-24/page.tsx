// apps/web/app/telegram/make-24/page.tsx
'use client'
import { useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Game from "./Game";

function Make24GameContent() {
  const searchParams = useSearchParams();
  const encodedPuzzleId = searchParams.get('tgWebAppStartParam');

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

  useEffect(() => {
    const tg = (window as any).Telegram?.WebApp
    if (tg) {
      tg.ready()
      tg.expand()
    }
  }, [])

  const puzzleId = encodedPuzzleId ? decodePuzzleIndex(encodedPuzzleId) : undefined;

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <Game initialPuzzleId={puzzleId} />
    </main>
  )
}

export default function Make24Game() {
  return (
    <Suspense fallback={
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
        <div className="text-white">Loading...</div>
      </main>
    }>
      <Make24GameContent />
    </Suspense>
  )
}
