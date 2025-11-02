class Fraction {
  numerator: number;
  denominator: number;

  constructor(numerator: number, denominator: number = 1) {
    if (denominator === 0) {
      throw new Error("Denominator cannot be zero");
    }
    const gcd = Fraction.gcd(numerator, denominator);
    this.numerator = numerator / gcd;
    this.denominator = denominator / gcd;
  }

  // Greatest Common Divisor (for reducing fractions)
  private static gcd(a: number, b: number): number {
    return b === 0 ? a : Fraction.gcd(b, a % b);
  }

  // Addition
  add(other: Fraction | number): Fraction {
    if (typeof other === "number") other = new Fraction(other);
    const newNumerator = this.numerator * other.denominator + other.numerator * this.denominator;
    const newDenominator = this.denominator * other.denominator;
    return new Fraction(newNumerator, newDenominator);
  }

  // Subtraction
  subtract(other: Fraction | number): Fraction {
    if (typeof other === "number") other = new Fraction(other);
    return this.add(new Fraction(-other.numerator, other.denominator));
  }

  // Multiplication
  multiply(other: Fraction | number): Fraction {
    if (typeof other === "number") other = new Fraction(other);
    return new Fraction(this.numerator * other.numerator, this.denominator * other.denominator);
  }

  // Division
  divide(other: Fraction | number): Fraction {
    if (typeof other === "number") other = new Fraction(other);
    return new Fraction(this.numerator * other.denominator, this.denominator * other.numerator);
  }

  // Convert to decimal
  valueOf(): number {
    return this.numerator / this.denominator;
  }

  // Convert to string for display
  toString(): string {
    return `${this.numerator}/${this.denominator}`;
  }
}

export default Fraction;