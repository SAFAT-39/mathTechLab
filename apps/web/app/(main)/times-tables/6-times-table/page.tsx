import TimesTableSection from "../uitils/timesTablesSection1/TimesTableSection1";
import MulPracticeInSequence from "../uitils/timesTablesSection2/MulPracticeInSequence";
import MulPracticeShuffled from "../uitils/timesTablesSection4/MulPracticeShuffled";
import DragAndDropStep from "../uitils/timesTablesSection3/dragAndDropStep";
import DescriptionFAQs from "./DescriptionFAQs";
import TableNavigation from "../uitils/tableNavigation/TableNavigation";
import TimesTableQuiz6 from "./TimesTableQuiz6";

export default function ThreeTimesTable() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
        <TimesTableSection
          tableNumber={6}
          titleGradient="bg-gradient-to-r from-orange-600 to-red-600"
          cardGradient="bg-gradient-to-br from-red-500 to-orange-600"
        />
      </div>
      <MulPracticeInSequence
        timesTable={6}
        bgGradient="from-orange-600 to-yellow-600"
        buttonGradient="from-yellow-600 to-orange-600"
      />
      <TimesTableQuiz6 />
      <DragAndDropStep timesTable={6} />
      <MulPracticeShuffled
        timesTable={6}
        bgGradient="from-red-600 to-yellow-600"
        buttonGradient="from-yellow-600 to-red-600"
      />
      <DescriptionFAQs />
      <TableNavigation totalTables={12} />
    </>
  );
}
