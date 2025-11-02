'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const EditableMathField = dynamic(
  () => import("react-mathquill").then((mod) => mod.EditableMathField),
  { ssr: false }
);


interface MathEditorProps {
  value: string;
  onChange: (value: string) => void;
  onRemove: () => void;
}

export default function MathEditor({ value, onChange, onRemove }: MathEditorProps) {
  const [latex, setLatex] = useState(value);

  useEffect(() => {
    import("react-mathquill").then((mq) => {
      mq.addStyles();
    });
  }, []);

  const handleChange = (mathField: any) => {
    const newLatex = mathField.latex();
    setLatex(newLatex);
    onChange(newLatex);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <div className="flex items-center space-x-2">
        <div className="flex-1">
          <EditableMathField
            latex={latex}
            onChange={handleChange}
            config={{
              spaceBehavesLikeTab: true,
              autoCommands: 'pi theta sqrt sum prod alpha beta gamma delta epsilon zeta eta',
              autoOperatorNames: 'sin cos tan log ln',
            }}
            className="w-full min-h-[50px] p-2 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <button
          onClick={onRemove}
          className="p-2 text-gray-500 hover:text-red-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
} 