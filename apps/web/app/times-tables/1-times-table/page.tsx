import TimesTableSection from "../uitils/timesTablsSection1/TimesTableSection1";

export default function OneTimesTable() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <TimesTableSection
        tableNumber={1}
        titleGradient="bg-gradient-to-r from-blue-600 to-violet-600"
        cardGradient="bg-gradient-to-br from-violet-500 to-purple-600"
      />
    </div>
  );
}
