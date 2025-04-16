import TimesTableSection from "../uitils/timesTablesSection1/TimesTableSection1";
import MulPracticeInSequence from "../uitils/timesTablesSection2/MulPracticeInSequence";
import MulPracticeShuffled from "../uitils/timesTablesSection4/MulPracticeShuffled";
import DragAndDropStep from "../uitils/timesTablesSection3/dragAndDropStep";
import DescriptionFAQs from "./DescriptionFAQs";
import TableNavigation from "../uitils/tableNavigation/TableNavigation";
import TimesTableQuiz12 from "./TimesTableQuiz12";

export default function ThreeTimesTable() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
        <TimesTableSection
          tableNumber={12}
          titleGradient="bg-gradient-to-r from-emerald-600 to-green-600"
          cardGradient="bg-gradient-to-br from-green-500 to-lime-600"
        />
      </div>
      <MulPracticeInSequence
        timesTable={12}
        bgGradient="from-lime-600 to-green-600"
        buttonGradient="from-green-600 to-lime-600"
      />
      <TimesTableQuiz12 />
      <DragAndDropStep timesTable={12} />
      <MulPracticeShuffled
        timesTable={12}
        bgGradient="from-teal-600 to-emerald-600"
        buttonGradient="from-emerald-600 to-teal-600"
      />
      <DescriptionFAQs />
      <TableNavigation totalTables={12} />
    </>
  );
}
