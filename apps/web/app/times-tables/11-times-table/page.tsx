import TimesTableSection from "../uitils/timesTablesSection1/TimesTableSection1";
import MulPracticeInSequence from "../uitils/timesTablesSection2/MulPracticeInSequence";
import MulPracticeShuffled from "../uitils/timesTablesSection4/MulPracticeShuffled";
import DragAndDropStep from "../uitils/timesTablesSection3/dragAndDropStep";
import DescriptionFAQs from "./DescriptionFAQs";
import TableNavigation from "../uitils/tableNavigation/TableNavigation";
import TimesTableQuiz11 from "./TimesTableQuiz11";

export default function ThreeTimesTable() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
        <TimesTableSection
          tableNumber={11}
          titleGradient="bg-gradient-to-r from-cyan-600 to-teal-600"
          cardGradient="bg-gradient-to-br from-teal-500 to-emerald-600"
        />
      </div>
      <MulPracticeInSequence
        timesTable={11}
        bgGradient="from-emerald-600 to-green-600"
        buttonGradient="from-green-600 to-emerald-600"
      />
      <TimesTableQuiz11 />
      <DragAndDropStep timesTable={11} />
      <MulPracticeShuffled
        timesTable={11}
        bgGradient="from-teal-600 to-emerald-600"
        buttonGradient="from-emerald-600 to-teal-600"
      />
      <DescriptionFAQs />
      <TableNavigation totalTables={12} />
    </>
  );
}
