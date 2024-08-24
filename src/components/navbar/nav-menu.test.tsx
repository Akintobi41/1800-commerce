import { render, waitFor } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import CartIcon from '../../assets/Icons/CartIcon';
import store from '../../store/store';
import Logo from '../logo/Logo';
import OpenAccountModal from '../openAccountModal/OpenAccountModal';
import NavMenu from './navMenu/NavMenu';

 
   
describe('testing navbar', (() => { 
  test('test if cart link is in the document', async () => {
    const { getByTestId } = render( <MemoryRouter> <Provider store={store}><NavMenu Logo={Logo} modal={OpenAccountModal} cartIcon={CartIcon} /> </Provider> </MemoryRouter> );
    const link = await waitFor(() => getByTestId('cart-link'));
    expect(link).toBeInTheDocument();
  })
}))


