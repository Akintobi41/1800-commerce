import { render, screen } from "@testing-library/react"
import SignOutBtn from "./SignOutBtn"
import React from "react"
import TestComponentWrapper from "../../mocks/TestComponentWrapper"
import LayoutRoutes from './../layoutRoutes/LayoutRoutes';


const MockComponent = ()=> ( 
    <TestComponentWrapper><SignOutBtn className={undefined} /><LayoutRoutes/></TestComponentWrapper>
)

describe('test sign out button', (() => { 
    
    test('sign out button is rendered in the DOM', async () => { 
        render(<MockComponent />)
        expect(screen.getByRole('button', { name: 'sign-out-button' })).toBeInTheDocument();
    })
}))