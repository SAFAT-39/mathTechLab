interface HowToStep {
  "@type": string;
  name: string;
  text: string;
}

interface HowToUseProps {
  steps: HowToStep[];
}

export default function HowToUse({ steps }: HowToUseProps) {
  return (
    <div className="w-full mx-auto">
      <h2 className="text-3xl font-bold text-center mb-4 text-primary">
        🎮 How to Play
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className="h-full flex flex-col rounded-lg border border-gray-200 bg-blue-50 text-gray-900 shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <div className="p-6 pb-2">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold leading-none tracking-tight">
                  {step.name}
                </h3>
              </div>
            </div>
            <div className="px-6 pb-6 pt-0 flex-1">
              <p className="text-gray-900">{step.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
