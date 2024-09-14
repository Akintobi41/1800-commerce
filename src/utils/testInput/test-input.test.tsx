import { describe, it, expect } from 'vitest';
import { specialChars, hasNumber } from './testInput';


describe('specialChars function', () => {
    it('should return true for strings containing special characters', () => {
        expect(specialChars('hello!')).toBe(true);
        expect(specialChars('123@')).toBe(true);
        expect(specialChars('!@#$')).toBe(true);
    });

    it('should return false for strings without special characters', () => {
        expect(specialChars('hello')).toBe(false);
        expect(specialChars('123')).toBe(false);
        expect(specialChars('')).toBe(false);
    });

    it('should return true for strings containing only spaces', () => {
        expect(specialChars('   ')).toBe(true);
    });
});

describe('hasNumber function', () => {
    it('should return true for strings containing numbers', () => {
        expect(hasNumber('hello123')).toBe(true);
        expect(hasNumber('123')).toBe(true);
        expect(hasNumber('1a2b3c')).toBe(true);
    });

    it('should return false for strings without numbers', () => {
        expect(hasNumber('hello')).toBe(false);
        expect(hasNumber('')).toBe(false);
        expect(hasNumber('special@chars')).toBe(false);
    });
});
