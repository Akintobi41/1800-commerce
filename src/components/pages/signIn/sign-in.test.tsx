import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { describe, expect, test, vi } from 'vitest';
import TestComponentWrapper from './../../../mocks/TestComponentWrapper';
import SignIn from './SignIn';

const mockFunction = vi.fn()

const MockComponent = () => (
    <TestComponentWrapper><SignIn submit={mockFunction} /></TestComponentWrapper>
)

describe('SignIn Component', () => {

    test('renders Sign In form with all the form inputs', () => {
    render(<MockComponent />)
        expect(screen.getByRole('button', { name: 'Sign In' })).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/name@example.com/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/minimum of 8 characters please/i)).toBeInTheDocument();
        expect(screen.getByText(/Create Account/i)).toBeInTheDocument();
        expect(screen.queryByText('Some fields are still empty/incorrect')).not.toBeInTheDocument();

    }),
        test('form should not be submitted if the required fields are empty', async () => {
            render(<MockComponent />)
            await userEvent.click(screen.getByRole('button', { name: 'Sign In' }))
            expect(mockFunction).not.toHaveBeenCalled()
            expect(screen.queryByText('Some fields are still empty/incorrect')).toBeInTheDocument();
        }),
        test('form should be submitted if the required fields have been entered', async () => {
            render(<MockComponent />)

            await userEvent.type(screen.getByPlaceholderText(/name@example.com/i), 'akintobi@gmail.com')
            await userEvent.type(screen.getByPlaceholderText(/minimum of 8 characters please/i), 'Akintobi@41')
            await userEvent.click(screen.getByRole('button', { name: 'Sign In' }))
            
            expect(mockFunction).toHaveBeenCalledTimes(1)
            expect(mockFunction.mock.calls[0][0]).toEqual({
                email: 'akintobi@gmail.com',
                password: 'Akintobi@41',
            });
        })
     
});
