"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

interface TableNavigationProps {
  totalTables: number; // Maximum number of times tables
}

const TableNavigation: React.FC<TableNavigationProps> = ({ totalTables }) => {
  const router = useRouter();
  const pathname = usePathname();

  // Extracting the current table number from the URL
  const match = pathname.match(/\/times-tables\/(\d+)-times-table/);
  const currentTable = match ? parseInt(match[1], 10) : 1;

  // Calculate Previous & Next URLs
  const prevTable =
    currentTable > 1 ? `/times-tables/${currentTable - 1}-times-table` : null;
  const nextTable =
    currentTable < totalTables
      ? `/times-tables/${currentTable + 1}-times-table`
      : null;

  return (
    <div className="flex gap-5 md:gap-8 justify-end  items-end  mx-auto mt-10">
      {/* Previous Button */}
      <button
        onClick={() => prevTable && router.push(prevTable)}
        disabled={!prevTable}
        className={`md:px-6 py-3 text-lg font-semibold  transition duration-300 cursor-pointer ${
          prevTable
            ? "text-indigo-500  hover:text-indigo-600 hover:underline"
            : " text-gray-600 cursor-not-allowed"
        }`}
      >
        ← Previous
      </button>

      {/* Page Indicator */}
      {/* <span className="text-lg font-bold text-gray-800">
        {currentTable} Times Table
      </span> */}

      {/* Next Button */}
      <button
        onClick={() => nextTable && router.push(nextTable)}
        disabled={!nextTable}
        className={`md:px-6 py-3 text-lg font-semibold transition duration-300 cursor-pointer ${
          nextTable
            ? "text-indigo-500  hover:text-indigo-600 hover:underline"
            : " text-gray-600 cursor-not-allowed"
        }`}
      >
        {nextTable ? `Next → ${currentTable + 1} Times Table` : "Next →"}
      </button>
    </div>
  );
};

export default TableNavigation;
