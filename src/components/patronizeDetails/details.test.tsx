import { render, screen } from "@testing-library/react"
import React from "react"
import Details from './Details';
import { accordionContent } from "../patronize/u_Patronize";


describe('testing details section on homepage', (() => { 
    test('summary section is rendered in the DOM when the button is clicked', () => { 
        render(<Details el={accordionContent} activeIndex={undefined} setActiveIndex={undefined}/>);
        // render(<BrowserRouter> <AboutSection /></BrowserRouter>);
        const btn = screen.getByTestId('details-btn')
        btn.click();
        expect(screen.getByTestId('summary-section')).toBeInTheDocument();
   })
}))
