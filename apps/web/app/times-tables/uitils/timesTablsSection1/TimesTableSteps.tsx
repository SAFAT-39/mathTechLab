"use client";

interface Step {
  id: number;
  title: string;
  description: string;
  color: string;
}

const steps: Step[] = [
  {
    id: 1,
    title: "Visualize & Listen",
    description:
      "Look at the table and listen to each multiplication fact. This helps your brain create visual and auditory connections.",
    color: "bg-purple-600",
  },
  {
    id: 2,
    title: "Repeat Aloud",
    description:
      "Say each fact out loud. Speaking engages different parts of your brain and strengthens memory pathways.",
    color: "bg-blue-600",
  },
  {
    id: 3,
    title: "Pattern Recognition",
    description:
      "Notice how all answers in the times table follow a pattern. Understanding patterns makes memorization easier.",
    color: "bg-teal-600",
  },
  {
    id: 4,
    title: "Quick Recall Practice",
    description:
      "Test yourself by covering the answers and saying them before looking.",
    color: "bg-orange-600",
  },
  {
    id: 5,
    title: "Apply & Master",
    description:
      "Use these facts in word problems. Application cements understanding.",
    color: "bg-pink-600",
  },
];

const TimesTableSteps = () => {
  return (
    <div>
      <h2 className="text-lg md:text-xl font-bold mb-3 text-gray-800">
        Master the Times Table with MathTechLab
      </h2>

      <div className="space-y-4">
        {steps.map((step) => (
          <div
            key={step.id}
            className="p-5 rounded-xl bg-white shadow-lg border border-gray-200 hover:scale-101"
          >
            <div className="flex items-start gap-4">
              <div
                className={`flex-shrink-0 p-3 rounded-lg ${step.color} text-white`}
              >
                {step.id}
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {step.title}
                </h3>
                <p className="mt-2 text-gray-600">{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimesTableSteps;
