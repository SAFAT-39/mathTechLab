'use client';

import { useState } from 'react';
import GraphCanvas from './GraphCanvas';
import MathEditor from './MathEditor';

export default function GraphCalculator() {
  const [equations, setEquations] = useState<string[]>(['y=x']);

  const addEquation = () => {
    setEquations([...equations, '']);
  };

  const updateEquation = (index: number, value: string) => {
    const newEquations = [...equations];
    newEquations[index] = value;
    setEquations(newEquations);
  };

  const removeEquation = (index: number) => {
    const newEquations = equations.filter((_, i) => i !== index);
    setEquations(newEquations);
  };

  return (
    <div
      className="flex flex-col-reverse lg:flex-row w-full h-full bg-gray-100 overflow-hidden"
    >
      {/* Sidebar for equations */}
      <div className="sm:w-full lg:w-96 flex-shrink-0 bg-white flex flex-col p-4 gap-2 border-r border-gray-200">
        <div className="flex-1 overflow-y-auto flex flex-col gap-2 min-w-0">
          {equations.map((equation, index) => (
            <MathEditor
              key={index}
              value={equation}
              onChange={(value) => updateEquation(index, value)}
              onRemove={() => removeEquation(index)}
            />
          ))}
          {/* Add Equation Button as Card */}
          <button
            onClick={addEquation}
            className="w-full flex items-center justify-center gap-2 p-3 bg-white rounded-lg shadow border-2 border-dashed border-gray-300 hover:border-purple-500 hover:text-purple-600 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            <span className="font-medium">Add Equation</span>
          </button>
        </div>
      </div>
      {/* Graph area */}
      <div className="flex-1 h-full bg-white">
        <GraphCanvas equations={equations} />
      </div>
    </div>
  );
} 