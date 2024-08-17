import { render } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import FeatureBanner from "./FeatureBanner"
import { QueryClient ,QueryClientProvider} from "react-query"
import { Provider } from "react-redux"
import store from "../../store/store"
import React from "react"
import { screen } from "@testing-library/react"
import Products from "../pages/products/Products"

const queryClient = new QueryClient();


describe('', (() => { 
    test('when "Shop- New Arrivals" button is clicked it routes to Products', () => {
        render( <BrowserRouter><FeatureBanner/></BrowserRouter> )
        render(<QueryClientProvider client={queryClient}><Provider store={store}> <BrowserRouter><Products Sort={undefined} Filter={undefined}/></BrowserRouter></Provider></QueryClientProvider>  )
        const btn = screen.getByTestId('product-btn')
        btn.click();
        expect(screen.getByTestId('products')).toBeInTheDocument();
    }) 
}))

