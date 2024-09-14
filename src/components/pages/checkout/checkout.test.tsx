import { render, screen } from "@testing-library/react";
import React from "react";
import Checkout from "./Checkout";
import TestComponentWrapper from './../../../mocks/TestComponentWrapper';


const MockComponent = () => (
    <TestComponentWrapper> <Checkout/></TestComponentWrapper>
)


beforeEach(() => { 
    render(<MockComponent/>)
})


describe('testing checkout ', () => { 
   
    test('should show a form and render all inputs', () => { 
        const form = screen.getByTestId('form');
        const input = screen.getByTestId('name');
        const email = screen.getByTestId('email');
        const country = screen.getByTestId('country');
        const phoneNo = screen.getByTestId('number');
        const address = screen.getByTestId('address');
        const btn = screen.getByTestId('checkout-btn');
        
        expect(form).toBeInTheDocument();
        expect(input).toBeInTheDocument();
        expect(email).toBeInTheDocument();
        expect(country).toBeInTheDocument();
        expect(phoneNo).toBeInTheDocument();
        expect(address).toBeInTheDocument();
        expect(btn).toBeInTheDocument();
    })
})