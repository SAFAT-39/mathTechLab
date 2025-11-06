import TimesTableSection from "../uitils/timesTablesSection1/TimesTableSection1";
import MulPracticeInSequence from "../uitils/timesTablesSection2/MulPracticeInSequence";
import MulPracticeShuffled from "../uitils/timesTablesSection4/MulPracticeShuffled";
import DragAndDropStep from "../uitils/timesTablesSection3/dragAndDropStep";
import DescriptionFAQs from "./DescriptionFAQs";
import TableNavigation from "../uitils/tableNavigation/TableNavigation";
import TimesTableQuiz8 from "./TimesTableQuiz8";

export default function ThreeTimesTable() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
        <TimesTableSection
          tableNumber={8}
          titleGradient="bg-gradient-to-r from-pink-600 to-fuchsia-600"
          cardGradient="bg-gradient-to-br from-fuchsia-500 to-purple-600"
          firstparagraph={
            <>
              The <b>8 times table </b>reinforces doubling and number grouping.
            </>
          }
          secondparaghrap={
            <>
              Since <b>8</b> is a multiple of <b>2</b> and <b>4</b>, it connects
              earlier learning with advanced multiplication. Mastering it builds
              faster recall, better pattern recognition, and stronger
              problem-solving abilities in both math and logic-based tasks.
            </>
          }
        />
      </div>
      <MulPracticeInSequence
        timesTable={8}
        bgGradient="from-fuchsia-600 to-pink-600"
        buttonGradient="from-pink-600 to-fuchsia-600"
      />
      <TimesTableQuiz8 />
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
