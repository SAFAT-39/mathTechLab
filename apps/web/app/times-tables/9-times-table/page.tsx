import TimesTableSection from "../uitils/timesTablesSection1/TimesTableSection1";
import MulPracticeInSequence from "../uitils/timesTablesSection2/MulPracticeInSequence";
import MulPracticeShuffled from "../uitils/timesTablesSection4/MulPracticeShuffled";
import DragAndDropStep from "../uitils/timesTablesSection3/dragAndDropStep";
import DescriptionFAQs from "./DescriptionFAQs";
import TableNavigation from "../uitils/tableNavigation/TableNavigation";

export default function ThreeTimesTable() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
        <TimesTableSection
          tableNumber={9}
          titleGradient="bg-gradient-to-r from-violet-600 to-purple-600"
          cardGradient="bg-gradient-to-br from-purple-500 to-indigo-600"
        />
      </div>
      <MulPracticeInSequence
        timesTable={9}
        bgGradient="from-indigo-600 to-violet-600"
        buttonGradient="from-violet-600 to-indigo-600"
      />
      <DragAndDropStep timesTable={9} />
      <MulPracticeShuffled
        timesTable={9}
        bgGradient="from-purple-600 to-violet-600"
        buttonGradient="from-violet-600 to-purple-600"
      />
      <DescriptionFAQs />
      <TableNavigation totalTables={12} />
    </>
  );
}
