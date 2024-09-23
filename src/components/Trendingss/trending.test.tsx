import { render, screen } from "@testing-library/react"
import React from "react"
import Trending from "./Trending"


describe('testing trending icons', (() => { 
    test('trending icons are rendered in the DOM', () => { 
        render(<Trending/>)
        expect(screen.getByTestId('trending-images')).toBeInTheDocument();
   })
}))