import type { Metadata } from 'next';
import GraphCalculator from './components/GraphCalculator';

export const metadata: Metadata = {
  title: 'Graph Calculator | MathTech Lab',
  description: 'Interactive graphing calculator for mathematical equations',
};

export default function GraphPage() {
  return (
    <div className="">
      <GraphCalculator />
    </div>
  );
}
