import TimesTableSection from "../uitils/timesTablesSection1/TimesTableSection1";
import MulPracticeInSequence from "../uitils/timesTablesSection2/MulPracticeInSequence";
import MulPracticeShuffled from "../uitils/timesTablesSection4/MulPracticeShuffled";
import DragAndDropStep from "../uitils/timesTablesSection3/dragAndDropStep";
import DescriptionFAQs from "./DescriptionFAQs";
import TableNavigation from "../uitils/tableNavigation/TableNavigation";
import TimesTableQuiz5 from "./TimesTableQuiz5";

export default function ThreeTimesTable() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
        <TimesTableSection
          tableNumber={5}
          titleGradient="bg-gradient-to-r from-yellow-600 to-amber-600"
          cardGradient="bg-gradient-to-br from-amber-500 to-orange-600"
        />
      </div>
      <MulPracticeInSequence
        timesTable={5}
        bgGradient="from-amber-600 to-yellow-600"
        buttonGradient="from-yellow-600 to-amber-600"
      />
      <TimesTableQuiz5 />
      <DragAndDropStep timesTable={5} />
      <MulPracticeShuffled
        timesTable={5}
        bgGradient="from-orange-600 to-amber-600"
        buttonGradient="from-amber-600 to-orange-600"
      />
      <DescriptionFAQs />
      <TableNavigation totalTables={12} />
    </>
  );
}
