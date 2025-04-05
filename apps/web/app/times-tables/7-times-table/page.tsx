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
          tableNumber={7}
          titleGradient="bg-gradient-to-r from-red-600 to-rose-600"
          cardGradient="bg-gradient-to-br from-rose-500 to-orange-600"
        />
      </div>
      <MulPracticeInSequence
        timesTable={7}
        bgGradient="from-rose-600 to-red-600"
        buttonGradient="from-red-600 to-rose-600"
      />
      <DragAndDropStep timesTable={7} />
      <MulPracticeShuffled
        timesTable={7}
        bgGradient="from-rose-600 to-orange-600"
        buttonGradient="from-orange-600 to-rose-600"
      />
      <DescriptionFAQs />
      <TableNavigation totalTables={12} />
    </>
  );
}
