import { render, screen } from "@testing-library/react"
import React from "react"
import About from './../pages/about/About';
import { BrowserRouter } from "react-router-dom";
import AboutSection from "./AboutSection";


describe('testing about links', (() => { 
    test('about section is rendered when link is clicked', () => { 
        render(<BrowserRouter><About /></BrowserRouter>);
        render(<BrowserRouter> <AboutSection /></BrowserRouter>);
        const btn = screen.getByTestId('about-section')
        btn.click();
        expect(screen.getByTestId('about-main')).toBeInTheDocument();
   })
}))
