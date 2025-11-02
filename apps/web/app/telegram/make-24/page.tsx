// apps/web/app/telegram/make-24/page.tsx
'use client'
import { useEffect, Suspense, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Calculator, HelpCircle } from 'lucide-react';
import Game from "./Game";

function Make24GameContent() {
  const searchParams = useSearchParams();
  const encodedPuzzleId = searchParams.get('tgWebAppStartParam');
  const [showHelp, setShowHelp] = useState(false);

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
    <div className="flex flex-col min-h-screen bg-gray-900">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700 px-4 py-3">
        <div className="flex items-center justify-between max-w-md mx-auto">
          <div className="flex items-center gap-2">
            <Calculator size={24} className="text-green-500" />
            <h1 className="text-xl font-bold text-white">Make 24</h1>
          </div>
          <button
            onClick={() => setShowHelp(!showHelp)}
            className="p-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded transition-colors"
            aria-label="Help"
          >
            <HelpCircle size={24} />
          </button>
        </div>
      </header>

      {/* Help Dialog */}
      {showHelp && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-lg p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-white">How to Play</h2>
              <button
                onClick={() => setShowHelp(false)}
                className="text-gray-400 hover:text-white"
              >
                ×
              </button>
            </div>
            <div className="text-gray-300 space-y-3">
              <p>
                Use the four numbers and the four basic operations (+, -, ×, ÷) to make 24.
              </p>
              <p>
                <strong>Steps:</strong>
              </p>
              <ol className="list-decimal list-inside space-y-1 ml-2">
                <li>Select one number</li>
                <li>Choose an operation</li>
                <li>Select another number</li>
                <li>Repeat until you get 24</li>
              </ol>
              <p>
                You can use undo/redo buttons to navigate through your moves.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Main Game Content */}
      <main className="flex flex-col items-center justify-center flex-1">
        <Game initialPuzzleId={puzzleId} />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 px-4 py-3">
        <div className="text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} <a href="https://mathtechlab.com" target='_blank' className="hover:text-white transition-colors">mathtechlab.com</a>
        </div>
      </footer>
    </div>
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
