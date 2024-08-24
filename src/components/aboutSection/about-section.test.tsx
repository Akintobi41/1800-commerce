import { render, screen } from "@testing-library/react"
import React, { act } from "react"
import About from './../pages/about/About';
import { BrowserRouter } from "react-router-dom";
import AboutSection from "./AboutSection";


describe('testing about links', (() => { 
    test('about section is rendered when link is clicked', () => { 
        render(<BrowserRouter><About /></BrowserRouter>);
        render(<BrowserRouter> <AboutSection /></BrowserRouter>);
        const btn = screen.getByTestId('about-section')
        act(() => { 
            btn.click();
        })
        screen.debug();
        expect(screen.getByTestId('about-main')).toBeInTheDocument();
        screen.debug();


   })
}))
