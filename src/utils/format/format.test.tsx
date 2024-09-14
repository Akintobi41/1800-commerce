import { describe, expect } from 'vitest';
import { format } from './format';

describe('format function', () => {
  test('should format numbers with two decimal places', () => {
    expect(format(1234)).toBe('1,234.00');
    expect(format(1234.5)).toBe('1,234.50');
    expect(format(1234.567)).toBe('1,234.57');
  });

  test('should handle numbers with no decimal part', () => {
    expect(format(0)).toBe('0.00');
    expect(format(1000000)).toBe('1,000,000.00');
  });

  test('should handle negative numbers', () => {
    expect(format(-1234)).toBe('-1,234.00');
    expect(format(-1234.5)).toBe('-1,234.50');
    expect(format(-1234.567)).toBe('-1,234.57');
  });
});
