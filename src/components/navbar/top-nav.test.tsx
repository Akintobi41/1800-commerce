import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import store from '../../store/store';
import userEvent from "@testing-library/user-event";
import NavMenu from "./navMenu/NavMenu";
import { MemoryRouter } from "react-router";
import Logo from './../logo/Logo';
import OpenAccountModal from "../openAccountModal/OpenAccountModal";
import CartIcon from "../../assets/Icons/CartIcon";
import TopNav from "./topNav/TopNav";



describe('test on the hamburger icon', (() => {
    test('menu list renders screen once hamburger icon is clicked', async () => {
        render(<Provider store={store}> <MemoryRouter><NavMenu Logo={Logo} modal={OpenAccountModal} cartIcon={CartIcon} /> </MemoryRouter> </Provider>)
        render(<Provider store={store}><TopNav menuToggle={undefined} section={undefined}/></Provider>)
        const btn = screen.findByRole('a')
        screen.debug()
        userEvent.click(btn)
        expect(screen.getByTestId('nav')).toBeInTheDocument();

    })
}))
