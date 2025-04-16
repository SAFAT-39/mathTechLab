import TimesTableSection from "../uitils/timesTablesSection1/TimesTableSection1";
import MulPracticeInSequence from "../uitils/timesTablesSection2/MulPracticeInSequence";
import MulPracticeShuffled from "../uitils/timesTablesSection4/MulPracticeShuffled";
import DragAndDropStep from "../uitils/timesTablesSection3/dragAndDropStep";
import DescriptionFAQs from "./DescriptionFAQs";
import TableNavigation from "../uitils/tableNavigation/TableNavigation";
import TimesTableQuiz10 from "./TimesTableQuiz10";

export default function ThreeTimesTable() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
        <TimesTableSection
          tableNumber={10}
          titleGradient="bg-gradient-to-r from-indigo-600 to-blue-600"
          cardGradient="bg-gradient-to-br from-blue-500 to-purple-600"
        />
      </div>
      <MulPracticeInSequence
        timesTable={10}
        bgGradient="from-blue-600 to-purple-600"
        buttonGradient="from-purple-600 to-blue-600"
      />
      <TimesTableQuiz10 />
      <DragAndDropStep timesTable={10} />
      <MulPracticeShuffled
        timesTable={10}
        bgGradient="from-blue-600 to-indigo-600"
        buttonGradient="from-indigo-600 to-blue-600"
      />
      <DescriptionFAQs />
      <TableNavigation totalTables={12} />
    </>
  );
}
