import { numbers } from '../numbers'

describe('Comparing numbers', () => {
  test('Greater than', () => {
    expect(numbers(2, 2)).toBeGreaterThan(3);
  });
  test('Greater or equal than', () => {
    expect(numbers(2, 2)).toBeGreaterThanOrEqual(4);
  });
  test('Less than', () => {
    expect(numbers(2, 2)).toBeLessThan(5);
  });
  test('Less or equal than', () => {
    expect(numbers(2, 2)).toBeLessThanOrEqual(4);
  });
  test('Float numbers', () => {
    expect(numbers(0.2, 1.2)).toBeCloseTo(1.4);
  });
});