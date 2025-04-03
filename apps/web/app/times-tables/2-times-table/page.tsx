import TimesTableSection from "../uitils/timesTablesSection1/TimesTableSection1";
import MulPracticeInSequence from "../uitils/timesTablesSection2/MulPracticeInSequence";
import MulPracticeShuffled from "../uitils/timesTablesSection4/MulPracticeShuffled";
import DragAndDropStep from "../uitils/timesTablesSection3/dragAndDropStep";
import DescriptionFAQs from "./DescriptionFAQs";
import TableNavigation from "../uitils/tableNavigation/TableNavigation";

export default function TwoTimesTable() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
        <TimesTableSection
          tableNumber={2}
          titleGradient="bg-gradient-to-r from-blue-600 to-sky-600"
          cardGradient="bg-gradient-to-br from-sky-500 to-cyan-600"
        />
      </div>
      <MulPracticeInSequence
        timesTable={2}
        bgGradient="from-teal-600 to-cyan-600"
        buttonGradient="from-cyan-600 to-sky-600"
      />
      <DragAndDropStep timesTable={2} />
      <MulPracticeShuffled
        timesTable={2}
        bgGradient="from-indigo-600 to-cyan-600"
        buttonGradient="from-cyan-600 to-indigo-600"
      />
      <DescriptionFAQs />
      <TableNavigation totalTables={12} />
    </>
  );
}
