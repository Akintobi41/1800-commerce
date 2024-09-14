import { describe, expect } from 'vitest';
import { validateEmail } from './emailValidate';

describe('validateEmail', () => {
    test('should return true for valid email addresses', () => {
        const validEmails = [
            'test@example.com',
            'user.name@domain.co',
            'user_name@domain.org',
            'name.surname@domain.co.uk',
        ];

        validEmails.forEach(email => {
            expect(validateEmail(email)).toBe(true);
        });
    });

    test('should return false for invalid email addresses', () => {
        const invalidEmails = [
            'plainaddress',
            '@no-local-part.com',
            'username@.com',
            'username@domain',
            'username@domain,com'
        ];

        invalidEmails.forEach(email => {
            expect(validateEmail(email)).toBe(false);
        });
    });
});
