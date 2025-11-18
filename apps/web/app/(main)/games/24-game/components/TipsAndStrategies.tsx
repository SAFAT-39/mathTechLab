import React from 'react';

const tips = [
  {
    title: 'Multiples of 24',
    description: 'Look for combinations that multiply to 24 (e.g., 6 × 4, 8 × 3).',
    icon: '🔢',
  },
  {
    title: 'Division First',
    description: 'Try using division first when large numbers are present to simplify the problem.',
    icon: '➗',
  },
  {
    title: 'Order of Operations',
    description: 'Experiment with different orders of operations (PEMDAS) to find solutions.',
    icon: '🔀',
  },
  {
    title: 'Common Patterns',
    description: 'Practice with common number sets like (12, 3, 4, 1) → (12 ÷ (3 - 1) × 4 = 24).',
    icon: '🎯',
  },
];

const TipsAndStrategies = () => {
  return (
    <div className="w-full mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6 text-primary">
        💡 Tips & Strategies
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {tips.map((tip, index) => (
          <div 
            key={index}
            className="h-full flex flex-col rounded-lg border border-gray-200 bg-purple-100 text-gray-900 shadow-sm hover:shadow-lg transition-shadow duration-300 p-6"
          >
            <div className="flex items-center gap-2">
                <div className="text-3xl mb-3">{tip.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{tip.title}</h3>
            </div>
            <p className="text-gray-900">{tip.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TipsAndStrategies;
