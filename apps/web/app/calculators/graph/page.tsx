import type { Metadata } from 'next';
import GraphCalculator from './components/GraphCalculator';
import GraphContent from './components/GraphContent';

export const metadata: Metadata = {
  title: 'Graphing Calculator',
  description: 'Interactive graphing calculator for mathematical equations',
};

export default function GraphPage() {
  return (
    <div>
      <GraphCalculator />
      <GraphContent />
    </div>
  );
}
