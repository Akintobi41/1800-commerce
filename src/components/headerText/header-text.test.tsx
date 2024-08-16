import React from "react";
import HeaderText from "./HeaderText";
import { render, screen, waitFor } from "@testing-library/react";

describe('testing the header text', (() => {
    test('banner leaves the DOM when button is clicked', async () => { 
        render(<HeaderText />)
        const btn = screen.getByTestId('banner-button')
        btn.click()
        await waitFor(() => { 
        expect(screen.queryByTestId('banner')).not.toBeInTheDocument();
        })

    })    
}))