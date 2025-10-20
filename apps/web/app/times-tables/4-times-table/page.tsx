import TimesTableSection from "../uitils/timesTablesSection1/TimesTableSection1";
import MulPracticeInSequence from "../uitils/timesTablesSection2/MulPracticeInSequence";
import MulPracticeShuffled from "../uitils/timesTablesSection4/MulPracticeShuffled";
import DragAndDropStep from "../uitils/timesTablesSection3/dragAndDropStep";
import DescriptionFAQs from "./DescriptionFAQs";
import TableNavigation from "../uitils/tableNavigation/TableNavigation";
import TimesTableQuiz4 from "./TimesTableQuiz4";

export default function ThreeTimesTable() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
        <TimesTableSection
          tableNumber={4}
          titleGradient="bg-gradient-to-r from-green-600 to-lime-600"
          cardGradient="bg-gradient-to-br from-lime-500 to-emerald-600"
          firstparagraph={
            <>
              Learning the 4 times table teaches children how to multiply
              numbers efficiently in larger groups.
            </>
          }
          secondparaghrap={
            <>
              It builds connections with the <b>2 times table</b> (since 4 is
              double 2), reinforcing mathematical reasoning. This table improves
              memory recall and sets a strong base for higher multiplication
              like <b>8</b> and <b>12</b>.
            </>
          }
        />
      </div>
      <MulPracticeInSequence
        timesTable={4}
        bgGradient="from-lime-600 to-green-600"
        buttonGradient="from-green-600 to-lime-600"
      />
      <TimesTableQuiz4 />
      <DragAndDropStep timesTable={4} />
      <MulPracticeShuffled
        timesTable={4}
        bgGradient="from-teal-600 to-emerald-600"
        buttonGradient="from-emerald-600 to-teal-600"
      />
      <DescriptionFAQs />
      <TableNavigation totalTables={12} />
    </>
  );
}
