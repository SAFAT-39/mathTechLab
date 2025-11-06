import { ReactNode } from "react";

const TimesTableWhy = ({
  tableNumber,
  firstparagraph,
  secondparaghrap,
}: {
  tableNumber: number;
  firstparagraph: string | ReactNode;
  secondparaghrap: string | ReactNode;
}) => {
  return (
    <div className="mt-8 p-6 bg-white rounded-xl border border-l-4 border-l-violet-600 border-blue-100">
      <h3 className="text-xl font-semibold text-blue-900 mb-3">
        Why the {tableNumber} Times Table Matters
      </h3>
      <p className="text-gray-900 mb-4">{firstparagraph}</p>
      <p className="text-gray-900">{secondparaghrap}</p>
    </div>
  );
};

export default TimesTableWhy;
