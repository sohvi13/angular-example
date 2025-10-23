import { MathUtils } from './math-utils';

describe('MathUtils', () => {
  let utils: MathUtils;

  beforeEach(() => {
    utils = new MathUtils();
  });

  it('add returns sum for positive numbers', () => {
    expect(utils.add(2, 3)).toBe(5);
  });

  it('add handles negatives and zero', () => {
    expect(utils.add(-4, 0)).toBe(-4);
    expect(utils.add(-4, 6)).toBe(2);
  });

  it('divide returns correct quotient', () => {
    expect(utils.divide(10, 2)).toBe(5);
  });

  it('divide throws on division by zero', () => {
    expect(() => utils.divide(1, 0)).toThrowError(/Division by zero/);
  });

  it('factorial returns 1 for 0 and correct value for 5', () => {
    expect(utils.factorial(0)).toBe(1);
    expect(utils.factorial(5)).toBe(120);
  });

  it('factorial throws for negative input', () => {
    expect(() => utils.factorial(-1)).toThrowError(/negative/);
  });

  it('clamp returns min when value is below range', () => {
    expect(utils.clamp(-10, 0, 100)).toBe(0);
  });

  it('clamp returns max when value is above range', () => {
    expect(utils.clamp(150, 0, 100)).toBe(100);
  });

  it('clamp throws when min is greater than max', () => {
    expect(() => utils.clamp(5, 10, 0)).toThrowError(/min must be <= max/);
  });

  it('isPrime identifies primes and non-primes including boundaries', () => {
    [-5, 0, 1, 4, 9, 21, 100].forEach((n) => {
      expect(utils.isPrime(n)).withContext(`n=${n}`).toBeFalse();
    });
    [2, 3, 5, 97].forEach((n) => {
      expect(utils.isPrime(n)).withContext(`n=${n}`).toBeTrue();
    });
  });
});
