import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import React from "react";
import Subscribe from "./Subscribe";




describe('testing the subscribe form', (() => {

    test('check if input field is in the DOM', () => {
        render(<Subscribe />)
        expect(screen.getByLabelText('email')).toBeInTheDocument();
    }),
        test('check if 3 radio inputs are rendered', () => {
            render(<Subscribe />)
            expect(screen.getAllByTestId('radio')).toHaveLength(3);
        }),
        test('check if radio input is in the DOM', () => {
            render(<Subscribe />)
            expect(screen.getAllByTestId('radio')[0]).toBeInTheDocument();
        }),
        test('check if radio input is checked', () => {
            render(<Subscribe />)
            const radio = screen.getAllByTestId('radio')[0]
            userEvent.click(radio);
            expect(radio.value).toBe('Men')
        }),

        test('check error element is rendered in the DOM', () => {
            render(<Subscribe />)
            expect(screen.queryByTestId('error')).not.toBeInTheDocument();
        }),
        test('check error message is blank when input is changed', () => {
            render(<Subscribe />)
            const input = screen.getByLabelText('email');
            fireEvent.change(input, { target: { value: 'Good Day' } })
            expect(screen.queryByTestId('error')).not.toBeInTheDocument(); //empty
        }),
        test('check error message is present when button is clicked', async () => {
            render(<Subscribe />)
            const btn = screen.getByTestId('btn');

            userEvent.click(btn);
            await waitFor(() => {
                expect(screen.queryByTestId('error')).toBeInTheDocument();
            });
        }),
        test('should have the Sign Up Now button when initialized', () => {
            render(<Subscribe />)

            expect(screen.getByTestId('btn')).toBeInTheDocument();
        })
}))
