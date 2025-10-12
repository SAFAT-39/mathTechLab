// Seeded random number generator using Linear Congruential Generator (LCG)
class SeededRandom {
  private seed: number;

  constructor(seed: number) {
    this.seed = seed;
  }

  // Generate next random number between 0 and 1
  next(): number {
    // LCG formula: (a * seed + c) % m
    // Using constants that provide good distribution
    this.seed = (this.seed * 1664525 + 1013904223) % Math.pow(2, 32);
    return this.seed / Math.pow(2, 32);
  }

  // Generate random integer between min (inclusive) and max (exclusive)
  nextInt(min: number, max: number): number {
    return Math.floor(this.next() * (max - min)) + min;
  }

  // Generate random integer between 0 (inclusive) and max (exclusive)
  nextIntMax(max: number): number {
    return Math.floor(this.next() * max);
  }
}

// Create a seeded random instance based on the number
export const createSeededRandom = (num: number): SeededRandom => {
  // Use the number as seed, but add some variation to avoid patterns
  const seed = num * 12345 + 67890;
  return new SeededRandom(seed);
};

// Helper function to get seeded selection from array
export const getSeededSelection = <T>(array: T[], num: number): T => {
  const random = createSeededRandom(num);
  const index = random.nextIntMax(array.length);
  return array[index];
};
