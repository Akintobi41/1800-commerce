import { render, screen } from "@testing-library/react"
import Trending from "./Trending"

describe('testing trending icons', (() => { 
    test('trending section is rendered in the DOM', () => { 
        render(<Trending/>)
        expect(screen.getByTestId('trending-section')).toBeInTheDocument();
   })
}))