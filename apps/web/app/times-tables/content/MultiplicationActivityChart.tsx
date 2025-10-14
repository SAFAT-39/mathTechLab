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
      <div className="relative text-2xl font-bold text-white py-4 mt-7 inline-block">
        <div
          className="bg-gradient-to-b from-indigo-800 via-purple-800 to-indigo-700 md:px-10 px-5 md:py-5  text-center text-white font-bold relative"
          style={{ clipPath: "polygon(0% 0%, 95% 0%, 100% 100%, 0% 100%)" }}
        >
          Interactive Multiplication Chart
        </div>
      </div>
      {/* <p className=" font-medium  mb-2">
        This <b>interactive multiplication chart</b> helps users visualize and
        practice multiplication in an engaging way. The table ranges from 0 to
        12, allowing users to tap on any cell to reveal the product of the
        corresponding numbers. The revealed cells are color-coded based on the
        product value, making patterns easier to recognize. Users can reset or
        reveal all cells with a single click. Optimized for both desktop and
        mobile devices, the chart provides a smooth and responsive experience
        for learning multiplication interactively.
      </p> */}
      <p className="font-medium mb-4 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 border-l-4 border-indigo-600 rounded-md p-4 leading-relaxed text-gray-800 shadow-sm">
        Discover a smarter way to learn math with our{" "}
        <strong>Interactive Multiplication Chart</strong> is a fun and dynamic
        way to master multiplication skills while enjoying the learning process.
        Designed for students, teachers, and parents, this chart allows users to{" "}
        <strong>tap any cell from 0 to 12</strong> and instantly reveal the
        correct product.
        <br />
        <br />
        Each answer is <strong>color-coded</strong> with vibrant gradients to
        make math patterns easy to recognize, helping learners visualize how
        numbers connect across the grid. Whether you’re practicing for school or
        brushing up on your times tables, this chart turns repetitive drills
        into an
        <strong> engaging, game-like experience</strong>. You can easily{" "}
        <strong>reset the chart</strong> for a fresh start or{" "}
        <strong>reveal all answers</strong> to explore multiplication patterns
        at a glance. Built with a <strong>responsive design</strong>, it works
        seamlessly on both desktop and mobile devices, offering smooth
        interactions and a visually pleasing experience.
        <br />
        <br />
        Perfect for learners of all ages, this{" "}
        <strong>interactive times table tool</strong> makes math learning
        enjoyable, colorful, and confidence-boosting.
      </p>
      <div className="flex flex-col items-center space-y-4 py-4 mx-auto">
        <div className="w-full rounded-xl overflow-hidden border-2 border-gray-300 shadow-lg overflow-x-auto ">
          <table className="border-collapse w-full">
            <thead>
              <tr>
                <th className=" h-9 md:w-12 md:h-12  bg-gray-100 border border-gray-300 text-xs md:text-lg font-bold text-blue-600 sticky left-0 z-10">
                  ×
                </th>
                {numbers.map((num) => (
                  <th
                    key={num}
                    className=" h-9 md:w-12 md:h-12  bg-gray-100 border border-gray-300 text-xs md:text-lgfont-bold text-blue-600"
                  >
                    {num}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {numbers.map((row) => (
                <tr key={row}>
                  <th className=" h-9 md:w-12 md:h-12  bg-gray-100 border border-gray-300 text-xs md:text-lg font-bold text-blue-600 sticky left-0 z-10">
                    {row}
                  </th>
                  {numbers.map((col) => {
                    const product = row * col;
                    const isRevealed = isCellRevealed(row, col);

                    return (
                      <td
                        key={col}
                        className="h-9 md:w-12 md:h-12 border border-gray-300 p-0 relative"
                      >
                        <div className="flex items-center justify-center w-full h-full">
                          <motion.button
                            className={` w-5 h-5.5 md:w-9 md:h-9 flex items-center justify-center rounded-md cursor-pointer
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
                                className={`text-white font-bold ${product > 99 ? "text-[9px] md:text-sm" : "text-xs md:text-base"}`}
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
            className="px-4 py-2 bg-indigo-700 text-white rounded-md font-medium cursor-pointer"
            onClick={resetAll}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Reset All
          </motion.button>

          <motion.button
            className="px-4 py-2 bg-green-700 text-white rounded-md font-medium cursor-pointer"
            onClick={revealAll}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Reveal All
          </motion.button>
        </div>
      </div>
      {/* How to Use Section */}
      <div className="mt-10 px-4 md:px-10 py-6 bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-800  rounded-lg  shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4 text-white">
          How to Use Interactive Multiplication Chart
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-lg">
          {/* Step 1 */}
          <div className="flex items-center gap-3 bg-white opacity-90  bg-opacity-10 p-4 rounded-md shadow-lg w-full md:w-1/3">
            {/* <span className="text-3xl">🔢</span> */}
            <p>
              Click on any <b>blue square</b> to reveal the multiplication
              result.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex items-center gap-3 bg-white opacity-90 bg-opacity-10 p-4 rounded-md shadow-lg w-full md:w-1/3">
            {/* <span className="text-3xl">🎨</span> */}
            <p>
              Revealed cells <b>change colors</b> based on the product value.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex items-center gap-3 bg-white opacity-90 bg-opacity-10 p-4 rounded-md shadow-lg w-full md:w-1/3">
            {/* <span className="text-3xl">🔄</span> */}
            <p>
              Use <b>Reset All</b> to clear the board or <b>Reveal All</b> to
              see every product.
            </p>
          </div>
        </div>
      </div>

      {/* Why Our Multiplication Table Chart Work */}
      <div className="mt-10">
        <h2 className="text-2xl md:text-3xl font-bold  mb-6 ">
          Why Our Multiplication Table Chart Is the Best for Learning
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className=" shadow-md rounded-2xl p-5 hover:shadow-lg transition-shadow duration-300">
            <h3 className="font-bold text-lg text-green-800">
              Visually Engaging Design
            </h3>
            <p className="text-gray-700 mt-2">
              Our <strong>color-coded multiplication table chart</strong> helps
              learners quickly recognize number patterns and improve memory
              retention through vibrant visual cues that make math fun and easy
              to understand.
            </p>
          </div>

          <div className=" shadow-md rounded-2xl p-5 hover:shadow-lg transition-shadow duration-300">
            <h3 className="font-bold text-lg text-green-800">
              Interactive Learning Experience
            </h3>
            <p className="text-gray-700 mt-2">
              Engage actively with our <strong>interactive times tables</strong>{" "}
              — click to reveal answers, test your speed, and reinforce
              multiplication skills in an exciting, game-like environment ideal
              for kids and adults alike.
            </p>
          </div>

          <div className=" shadow-md rounded-2xl p-5 hover:shadow-lg transition-shadow duration-300">
            <h3 className="font-bold text-lg text-green-800">
              Comprehensive Math Coverage
            </h3>
            <p className="text-gray-700 mt-2">
              Explore a complete{" "}
              <strong>multiplication table from 0×0 to 12×12</strong>, ensuring
              every learner builds a solid foundation in multiplication facts —
              from beginners to advanced math students.
            </p>
          </div>

          <div className=" shadow-md rounded-2xl p-5 hover:shadow-lg transition-shadow duration-300">
            <h3 className="font-bold text-lg text-green-800">
              Perfect for All Ages
            </h3>
            <p className="text-gray-700 mt-2">
              Whether you’re an elementary student mastering basics or an adult
              brushing up on math skills, our{" "}
              <strong>multiplication chart for all ages</strong>
              makes learning engaging, simple, and rewarding for everyone.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default MultiplicationActivityChart;
