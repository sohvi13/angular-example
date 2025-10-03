export class MathUtils {
  add(a: number, b: number): number {
    return a + b;
  }

  divide(a: number, b: number): number {
    if (b === 0) throw new Error('Division by zero');
    return a / b;
  }

  factorial(n: number): number {
    if (!Number.isInteger(n)) throw new Error('Factorial requires an integer');
    if (n < 0) throw new Error('Factorial of negative number is undefined');
    let res = 1;
    for (let i = 2; i <= n; i++) res *= i;
    return res;
  }

  clamp(value: number, min: number, max: number): number {
    if (min > max) throw new Error('min must be <= max');
    if (value < min) return min;
    if (value > max) return max;
    return value;
  }

  isPrime(n: number): boolean {
    if (!Number.isInteger(n) || n < 2) return false;
    if (n % 2 === 0) return n === 2;
    const limit = Math.floor(Math.sqrt(n));
    for (let i = 3; i <= limit; i += 2) {
      if (n % i === 0) return false;
    }
    return true;
  }
}
