'use client';

import { useEffect, useRef, useState } from 'react';
import { Board, JSXGraph } from 'jsxgraph';

const convertToJSExpr = (expr: string) => {
  return expr
    .replace(/\\left\(/g, '(')
    .replace(/\\right\)/g, ')')
    // Replace \sqrt{something} → Math.sqrt(something)
    .replace(/\\sqrt\{([^}]+)\}/g, 'Math.sqrt($1)')
    .replace(/\\sin/g, 'Math.sin')
    .replace(/\\cos/g, 'Math.cos')
    .replace(/\\tan/g, 'Math.tan')
    .replace(/\\log/g, 'Math.log')
    .replace(/\\exp/g, 'Math.exp')
    .replace(/\^/g, '**')
    .replace(/(\d+)x/g, '$1*x')  // 2x → 2*x
    .replace(/^y\s*=/, '')       // remove y=
    // Handle sin x, cos x, tan x format without parentheses
    .replace(/(Math\.sin|Math\.cos|Math\.tan|Math\.log|Math\.exp)\s+([a-zA-Z0-9(])/g, '$1($2)')
    .trim();
};


const ZOOM_FACTOR = 1.02;

interface GraphCanvasProps {
  equations: string[];
}

export default function GraphCanvas({ equations }: GraphCanvasProps) {
  const boardRef = useRef<HTMLDivElement>(null);
  const boardInstance = useRef<Board>(null);
  const objectsRef = useRef<any[]>([]);
  const [zoomLevel, setZoomLevel] = useState(1);
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  const debouncedRedraw = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      if (boardInstance.current) {
        redrawEquations();
      }
    }, 100);
  };

  const cleanupBoard = () => {
    if (boardInstance.current) {
      try {
        // Remove all objects first
        while (objectsRef.current.length > 0) {
          const obj = objectsRef.current.pop();
          if (obj && boardInstance.current) {
            boardInstance.current.removeObject(obj);
          }
        }
        // Free the board
        JSXGraph.freeBoard(boardInstance.current);
        boardInstance.current = null;
      } catch (error) {
        console.error('Error cleaning up board:', error);
      }
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleZoomIn = () => {
    if (boardInstance.current) {
      boardInstance.current.zoomIn();
      boardInstance.current.zoomIn();
      setZoomLevel(prev => prev * ZOOM_FACTOR * ZOOM_FACTOR);
    }
  };

  const handleZoomOut = () => {
    if (boardInstance.current) {
      boardInstance.current.zoomOut();
      boardInstance.current.zoomOut();
      setZoomLevel(prev => prev / ZOOM_FACTOR / ZOOM_FACTOR);
    }
  };

  const handleResetZoom = () => {
    if (boardInstance.current) {
      boardInstance.current.setBoundingBox([-100, 100, 100, -100]);
      setZoomLevel(1);
    }
  };

  const initializeBoard = () => {
    if (!boardRef.current) return;

    try {
      const boardId = 'jxgbox-' + Math.random().toString(36).substr(2, 9);
      boardRef.current.id = boardId;

      boardInstance.current = JSXGraph.initBoard(boardId, {
        boundingbox: [-10, 10, 10, -10],
        axis: true,
        grid: true,
        showCopyright: false,
        showNavigation: false,
        zoom: {
          factorX: ZOOM_FACTOR,
          factorY: ZOOM_FACTOR,
          wheel: true,
          needShift: false,
        },
        pan: {
          needShift: false,
          needTwoFingers: false,
        },
      });

      if (!boardInstance.current) {
        console.error('Failed to initialize board');
        return;
      }

      // Configure dense grid
      const grid = boardInstance.current.create('grid', [], {
        major: {
          face: 'line',
          size: 4,
          strokeColor: 'black',
        },
        minor: {
          face: 'line',
          size: 2,
          strokeColor: 'grey',
        },
        minorElements: 4,
        includeBoundaries: false,
      });

      // Draw initial equations
      equations.forEach((equation) => {
        if (equation.trim()) {
          try {
            // Format the expression for JSXGraph
            const formattedExpr = convertToJSExpr(equation);
            const func = new Function('x', `return ${formattedExpr}`);
            const graph = boardInstance.current?.create('functiongraph', [func, -10, 10], {
              strokeColor: '#8b5cf6',
              strokeWidth: 2,
            });
            objectsRef.current.push(graph);
          } catch (error) {
            // console.error('Error creating graph:', error);
          }
        }
      });

      // Add event listeners
      boardInstance.current.on('update', () => {
        debouncedRedraw();
      });
    } catch (error) {
      console.error('Error initializing board:', error);
    }
  };

  const redrawEquations = () => {
    if (!boardInstance.current) return;

    try {
      // Remove existing graphs
      while (objectsRef.current.length > 0) {
        const obj = objectsRef.current.pop();
        if (obj) {
          boardInstance.current.removeObject(obj);
        }
      }

      // Get current board bounds
      const bounds = boardInstance.current.getBoundingBox();
      const left = bounds[0];
      const right = bounds[2];

      // Draw new equations
      equations.forEach((equation) => {
        if (equation.trim()) {
          try {
            // Format the expression for JSXGraph
            const formattedExpr = convertToJSExpr(equation);
            const func = new Function('x', `return ${formattedExpr}`);
            const graph = boardInstance.current?.create('functiongraph', [func, left, right], {
              strokeColor: '#8b5cf6',
              strokeWidth: 2,
            });
            objectsRef.current.push(graph);
          } catch (error) {
            // console.error('Error creating graph:', error);
          }
        }
      });
    } catch (error) {
      console.warn('Error redrawing equations:', error);
    }
  };

  useEffect(() => {
    cleanupBoard();
    initializeBoard();

    return () => {
      cleanupBoard();
    };
  }, [equations]);

  return (
    <div className="w-full aspect-square bg-white rounded-lg shadow-lg relative">
      <div ref={boardRef} className="w-full h-full" />
      <div className="absolute top-4 right-4 flex flex-col gap-2">
        <button
          onClick={handleZoomIn}
          className="p-2 bg-white rounded-lg shadow-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500"
          title="Zoom In"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
        </button>
        <button
          onClick={handleZoomOut}
          className="p-2 bg-white rounded-lg shadow-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500"
          title="Zoom Out"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
        </button>
        <button
          onClick={handleResetZoom}
          className="p-2 bg-white rounded-lg shadow-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500"
          title="Reset Zoom"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>

  );
}
