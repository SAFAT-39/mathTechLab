import TimesTableSection from "../uitils/timesTablsSection1/TimesTableSection1";
import MulPracticeInSequence from "../uitils/timesTablesSection2/MulPracticeInSequence";
import MulPracticeShuffled from "../uitils/timesTablesSection4/MulPracticeShuffled";
import ArtisticDragDropGame from "../uitils/timesTablesSection3/dragAndDropStep";

export default function OneTimesTable() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
        <TimesTableSection
          tableNumber={1}
          titleGradient="bg-gradient-to-r from-blue-600 to-violet-600"
          cardGradient="bg-gradient-to-br from-violet-500 to-purple-600"
        />
      </div>
      <MulPracticeInSequence
        timesTable={1}
        bgGradient="from-blue-600 to-violet-600"
        buttonGradient="from-violet-600 to-blue-600"
      />
      <ArtisticDragDropGame />
      <MulPracticeShuffled
        timesTable={1}
        bgGradient="from-teal-600 to-cyan-600"
        buttonGradient="from-cyan-600 to-sky-600"
      />
    </>
  );
}
