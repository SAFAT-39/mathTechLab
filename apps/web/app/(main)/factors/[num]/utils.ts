export function getFactors(n: number): number[] {
  const factors: number[] = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      factors.push(i);
    }
  }
  return factors;
}

export const getFactorPairs = (num: number): [number, number][] => {
  const pairs: [number, number][] = [];

  for (let i = 1; i <= Math.sqrt(Math.abs(num)); i++) {
    if (num % i === 0) {
      const pair: [number, number] = [i, num / i];
      pairs.push(pair);
      pairs.push([-i, -num / i]); // Negative counterpart
    }
  }

  return pairs;
};

export const getPrimeFactorization = (num: number): number[] => {
  const factors: number[] = [];
  let n = Math.abs(num); // Handle negative numbers

  for (let i = 2; i <= Math.sqrt(n); i++) {
    while (n % i === 0) {
      factors.push(i);
      n = n / i;
    }
  }

  if (n > 1) {
    factors.push(n);
  }

  return factors;
};
