import { Metadata } from 'next';
import PercentageCalculator from './components/PercentageCalculator';
import Content from './components/Content';

export const metadata: Metadata = {
  title: 'Percentage Calculator | MathTechLab',
  description: 'Calculate percentages easily with our free online percentage calculator. Find percentage of a number, percentage increase/decrease, and more.',
  keywords: 'percentage calculator, calculate percentage, percentage increase, percentage decrease, math calculator, online calculator',
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-purple-700 mb-4">
            Percentage Calculator
          </h1>
          <p className="text-lg text-gray-600">
            Calculate percentages easily with our free online calculator
          </p>
        </div>

        <PercentageCalculator />
        <Content />
      </div>
    </div>
  );
} 