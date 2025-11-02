// apps/web/app/telegram/make-24/page.tsx
'use client'
import { useEffect } from 'react';
import Game from "./Game";

export default function Make24Game() {
  useEffect(() => {
    const tg = (window as any).Telegram?.WebApp
    if (tg) {
      tg.ready()
      tg.expand()
    }
  }, [])

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <Game />
    </main>
  )
}
