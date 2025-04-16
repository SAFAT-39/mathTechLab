import TimesTableSection from "../uitils/timesTablesSection1/TimesTableSection1";
import MulPracticeInSequence from "../uitils/timesTablesSection2/MulPracticeInSequence";
import MulPracticeShuffled from "../uitils/timesTablesSection4/MulPracticeShuffled";
import DragAndDropStep from "../uitils/timesTablesSection3/dragAndDropStep";
import DescriptionFAQs from "./DescriptionFAQs";
import TableNavigation from "../uitils/tableNavigation/TableNavigation";
import TimesTableQuiz3 from "./TimesTableQuiz3";

export default function ThreeTimesTable() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
        <TimesTableSection
          tableNumber={3}
          titleGradient="bg-gradient-to-r from-teal-600 to-emerald-600"
          cardGradient="bg-gradient-to-br from-emerald-500 to-cyan-600"
        />
      </div>
      <MulPracticeInSequence
        timesTable={3}
        bgGradient="from-teal-600 to-cyan-600"
        buttonGradient="from-cyan-600 to-sky-600"
      />
      <TimesTableQuiz3 />
      <DragAndDropStep timesTable={3} />
      <MulPracticeShuffled
        timesTable={3}
        bgGradient="from-teal-600 to-emerald-600"
        buttonGradient="from-emerald-600 to-teal-600"
      />
      <DescriptionFAQs />
      <TableNavigation totalTables={12} />
    </>
  );
}
