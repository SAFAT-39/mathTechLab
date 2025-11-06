import TimesTableSection from "../uitils/timesTablesSection1/TimesTableSection1";
import MulPracticeInSequence from "../uitils/timesTablesSection2/MulPracticeInSequence";
import MulPracticeShuffled from "../uitils/timesTablesSection4/MulPracticeShuffled";
import DragAndDropStep from "../uitils/timesTablesSection3/dragAndDropStep";
import DescriptionFAQs from "./DescriptionFAQs";
import TableNavigation from "../uitils/tableNavigation/TableNavigation";
import TimesTableQuiz2 from "./TimesTableQuiz2";

export default function TwoTimesTable() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
        <TimesTableSection
          tableNumber={2}
          titleGradient="bg-gradient-to-r from-blue-600 to-sky-600"
          cardGradient="bg-gradient-to-br from-sky-500 to-cyan-600"
          firstparagraph={
            <>
              The <b>2 times table</b> introduces the concept of doubling,
              helping learners recognize even numbers and patterns in counting.
            </>
          }
          secondparaghrap={
            "Mastering it strengthens arithmetic fluency and prepares children for more complex tables. It’s also a key step in developing mental math skills and understanding number relationships."
          }
        />
      </div>
      <MulPracticeInSequence
        timesTable={2}
        bgGradient="from-teal-600 to-cyan-600"
        buttonGradient="from-cyan-600 to-sky-600"
      />
      <TimesTableQuiz2 />
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
