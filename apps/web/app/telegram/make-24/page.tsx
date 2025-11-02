// apps/web/app/telegram/make-24/page.tsx
'use client'
import { useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Game from "./Game";

function Make24GameContent() {
  const searchParams = useSearchParams();
  const puzzleId = searchParams.get('tgWebAppStartParam');

  useEffect(() => {
    const tg = (window as any).Telegram?.WebApp
    if (tg) {
      tg.ready()
      tg.expand()
      console.log({ puzzleId });
    }
  }, [])

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <Game initialPuzzleId={puzzleId ? parseInt(puzzleId, 10) : undefined} />
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
