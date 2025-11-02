const TimesTableWhy = ({ tableNumber }: { tableNumber: number }) => {
  return (
    <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
      <h3 className="text-xl font-semibold text-blue-900 mb-3">
        Why the {tableNumber} Times Table Matters
      </h3>
      <p className="text-gray-700 mb-4">
        The {tableNumber} times table is an essential foundation in
        multiplication. Mastering it builds confidence and pattern recognition
        skills.
      </p>
      <p className="text-gray-700">
        Research shows that strong multiplication skills improve overall math
        performance. Starting with the {tableNumber} times table creates a
        positive learning experience.
      </p>
    </div>
  );
};

export default TimesTableWhy;
