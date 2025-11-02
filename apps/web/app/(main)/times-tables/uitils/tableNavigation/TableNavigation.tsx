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
    <div className="flex gap-5 md:gap-8 justify-between  items-center  mx-auto mt-10">
      {/* Previous Button */}
      <button
        onClick={() => prevTable && router.push(prevTable)}
        disabled={!prevTable}
        className={`text-right text-lg font-semibold  transition duration-300 cursor-pointer  ${
          prevTable
            ? "text-blue-600  hover:text-blue-800 hover:underline"
            : " text-gray-600 cursor-not-allowed"
        }`}
      >
        {prevTable ? (
          <>
            <span>
              <span className="block">← Previous</span>
              <span className="block">{`${currentTable - 1} Times Table`}</span>
            </span>
          </>
        ) : (
          <span className="block">← Previous</span>
        )}
      </button>

      {/* Page Indicator */}
      {/* <span className="text-lg font-bold text-gray-800">
        {currentTable} Times Table
      </span> */}

      {/* Next Button */}
      <button
        onClick={() => nextTable && router.push(nextTable)}
        disabled={!nextTable}
        className={`text-left text-lg font-semibold transition duration-300 cursor-pointer  ${
          nextTable
            ? "text-blue-600  hover:text-blue-800 hover:underline"
            : " text-gray-600 cursor-not-allowed"
        }`}
      >
        {nextTable ? (
          <>
            <span className="block">Next →</span>
            <span className="block">{`${currentTable + 1} Times Table`}</span>
          </>
        ) : (
          <span className="block">Next →</span>
        )}
      </button>
    </div>
  );
};

export default TableNavigation;
