"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const MultiplicationActivityChart = () => {
  // State to track which cells have been clicked
  const [revealedCells, setRevealedCells] = useState<Record<string, boolean>>(
    {}
  );

  // Array of numbers for the grid (0-12)
  const numbers = Array.from({ length: 13 }, (_, i) => i);

  // Function to toggle cell visibility
  const toggleCell = (row: number, col: number) => {
    const cellKey = `${row}-${col}`;
    setRevealedCells((prev) => ({
      ...prev,
      [cellKey]: !prev[cellKey],
    }));
  };

  // Function to check if a cell is revealed
  const isCellRevealed = (row: number, col: number) => {
    return revealedCells[`${row}-${col}`] === true;
  };

  // Function to get cell background color based on product value
  const getCellColor = (product: number) => {
    const colors = [
      "bg-gradient-to-br from-purple-500 to-purple-600", // 0
      "bg-gradient-to-br from-blue-500 to-blue-600", // 1-9
      "bg-gradient-to-br from-cyan-500 to-cyan-600", // 10-19
      "bg-gradient-to-br from-teal-500 to-teal-600", // 20-29
      "bg-gradient-to-br from-green-500 to-green-600", // 30-39
      "bg-gradient-to-br from-lime-500 to-lime-600", // 40-49
      "bg-gradient-to-br from-yellow-500 to-yellow-600", // 50-59
      "bg-gradient-to-br from-amber-500 to-amber-600", // 60-69
      "bg-gradient-to-br from-orange-500 to-orange-600", // 70-79
      "bg-gradient-to-br from-red-500 to-red-600", // 80-99
      "bg-gradient-to-br from-pink-500 to-pink-600", // 100-119
      "bg-gradient-to-br from-fuchsia-500 to-fuchsia-600", // 120-144
    ];

    if (product === 0) return colors[0];
    if (product < 10) return colors[1];
    if (product < 20) return colors[2];
    if (product < 30) return colors[3];
    if (product < 40) return colors[4];
    if (product < 50) return colors[5];
    if (product < 60) return colors[6];
    if (product < 70) return colors[7];
    if (product < 80) return colors[8];
    if (product < 100) return colors[9];
    if (product < 120) return colors[10];
    return colors[11];
  };

  // Reset all cells
  const resetAll = () => {
    setRevealedCells({});
  };

  // Reveal all cells
  const revealAll = () => {
    const allCells: Record<string, boolean> = {};
    for (let row = 0; row <= 12; row++) {
      for (let col = 0; col <= 12; col++) {
        allCells[`${row}-${col}`] = true;
      }
    }
    setRevealedCells(allCells);
  };

  return (
    <>
      <div className="relative text-lg font-bold text-white py-4 mt-7 inline-block">
        <div
          className="bg-gradient-to-b from-indigo-800 via-purple-800 to-indigo-700 md:px-10 px-5 md:py-5  text-center text-white font-bold relative"
          style={{ clipPath: "polygon(0% 0%, 95% 0%, 100% 100%, 0% 100%)" }}
        >
          Interactive Multiplication Chart
        </div>
      </div>
      <p className=" font-medium  mb-2">
        This <b>interactive multiplication chart</b> helps users visualize and
        practice multiplication in an engaging way. The table ranges from 0 to
        12, allowing users to tap on any cell to reveal the product of the
        corresponding numbers. The revealed cells are color-coded based on the
        product value, making patterns easier to recognize. Users can reset or
        reveal all cells with a single click. Optimized for both desktop and
        mobile devices, the chart provides a smooth and responsive experience
        for learning multiplication interactively.
      </p>
      <div className="flex flex-col items-center space-y-4 p-4 mx-auto">
        <div className="rounded-xl overflow-hidden border-2 border-gray-300 shadow-lg overflow-x-auto">
          <table className="border-collapse">
            <thead>
              <tr>
                <th className=" w-9 h-9 md:w-12 md:h-12  bg-gray-100 border border-gray-300 text-lg font-bold text-blue-600 sticky left-0 z-10">
                  ×
                </th>
                {numbers.map((num) => (
                  <th
                    key={num}
                    className=" w-9 h-9 md:w-12 md:h-12  bg-gray-100 border border-gray-300 text-lg font-bold text-blue-600"
                  >
                    {num}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {numbers.map((row) => (
                <tr key={row}>
                  <th className=" w-9 h-9 md:w-12 md:h-12  bg-gray-100 border border-gray-300 text-lg font-bold text-blue-600 sticky left-0 z-10">
                    {row}
                  </th>
                  {numbers.map((col) => {
                    const product = row * col;
                    const isRevealed = isCellRevealed(row, col);

                    return (
                      <td
                        key={col}
                        className="w-9.5 h-9.5 md:w-12 md:h-12 border border-gray-300 p-0 relative"
                      >
                        <div className="flex items-center justify-center w-full h-full">
                          <motion.button
                            className={` w-6.5 h-6.5 md:w-9 md:h-9 flex items-center justify-center rounded-md 
                            ${isRevealed ? getCellColor(product) : "bg-blue-200 hover:bg-blue-300"} 
                            transition-colors duration-200 shadow-md`}
                            onClick={() => toggleCell(row, col)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            initial={{ opacity: 0.8 }}
                            animate={{
                              opacity: 1,
                              rotate: isRevealed ? [0, 10, -10, 0] : 0,
                            }}
                            transition={{
                              duration: 0.3,
                              type: "spring",
                              stiffness: 300,
                            }}
                          >
                            {isRevealed && (
                              <span
                                className={`text-white font-bold ${product > 99 ? "text-sm" : "text-base"}`}
                              >
                                {product}
                              </span>
                            )}
                          </motion.button>
                        </div>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <motion.button
            className="px-4 py-2 bg-indigo-700 text-white rounded-md font-medium"
            onClick={resetAll}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Reset All
          </motion.button>

          <motion.button
            className="px-4 py-2 bg-green-700 text-white rounded-md font-medium"
            onClick={revealAll}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Reveal All
          </motion.button>
        </div>
      </div>
      {/* How to Use Section */}
      <div className="mt-10 px-4 md:px-10 py-6 bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-800 rounded-lg  shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4 text-white">
          📌 How to Use
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-lg">
          {/* Step 1 */}
          <div className="flex items-center gap-3 bg-white bg-opacity-10 p-4 rounded-md shadow-lg w-full md:w-1/3">
            <span className="text-3xl">🔢</span>
            <p>
              Click on any <b>blue square</b> to reveal the multiplication
              result.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex items-center gap-3 bg-white bg-opacity-10 p-4 rounded-md shadow-lg w-full md:w-1/3">
            <span className="text-3xl">🎨</span>
            <p>
              Revealed cells <b>change colors</b> based on the product value.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex items-center gap-3 bg-white bg-opacity-10 p-4 rounded-md shadow-lg w-full md:w-1/3">
            <span className="text-3xl">🔄</span>
            <p>
              Use <b>Reset All</b> to clear the board or <b>Reveal All</b> to
              see every product.
            </p>
          </div>
        </div>
      </div>

      {/* Why Our Multiplication Table Chart Work */}
      <div className="mt-8">
        <h2 className="text-xl font-bold text-blue-600 mb-3">
          Why Our Multiplication Table Chart Work
        </h2>
        <ul className="list-inside list-disc pl-5  text-gray-00">
          <li>
            <strong>Visually engaging - </strong> Color-coded for better memory.
          </li>
          <li>
            <strong>Interactive learning -</strong> Click to reveal products.
          </li>
          <li>
            <strong>Comprehensive -</strong> Covers all facts from 0×0 to 12×12.
          </li>
          <li>
            <strong>Perfect for all ages -</strong> lementary to adult learners.
          </li>
        </ul>
      </div>
    </>
  );
};
export default MultiplicationActivityChart;
