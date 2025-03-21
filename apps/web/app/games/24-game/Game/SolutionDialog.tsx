import React from "react";

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  items: string[];
}

const SolutionDialog: React.FC<DialogProps> = ({ isOpen, onClose, items }) => {
  if (!isOpen) return null; // Don't render when closed

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-50">
      <div className="bg-white p-2 rounded-lg shadow-lg w-60">
        <div className="mt-4 flex justify-between items-center">
          <h2 className="text-xl font-bold"> Solutions</h2>
          <button
            onClick={onClose}
            className="px-2 py-1 bg-gray-600 text-white rounded-md"
          >
            Close
          </button>
        </div>

        <ul className="mt-2 text-gray-600">
          {items.map((item, index) => (
            <li key={index} className="border-b py-2 last:border-none">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SolutionDialog;
