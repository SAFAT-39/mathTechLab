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
          tableNumber={8}
          titleGradient="bg-gradient-to-r from-pink-600 to-fuchsia-600"
          cardGradient="bg-gradient-to-br from-fuchsia-500 to-purple-600"
        />
      </div>
      <MulPracticeInSequence
        timesTable={8}
        bgGradient="from-fuchsia-600 to-pink-600"
        buttonGradient="from-pink-600 to-fuchsia-600"
      />
      <DragAndDropStep timesTable={8} />
      <MulPracticeShuffled
        timesTable={8}
        bgGradient="from-purple-600 to-fuchsia-600"
        buttonGradient="from-fuchsia-600 to-purple-600"
      />
      <DescriptionFAQs />
      <TableNavigation totalTables={12} />
    </>
  );
}
