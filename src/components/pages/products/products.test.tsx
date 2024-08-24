import { render, screen, waitFor } from "@testing-library/react"
import Products from "./Products"
import React from "react"
import { MemoryRouter } from "react-router"
import { Provider } from "react-redux"
import store from './../../../store/store';
import { QueryClient, QueryClientProvider } from "react-query"
import Sort from "../../sort/Sort"
import Filter from "../../filter/Filter"
import { beforeEach, vi } from 'vitest';
import { useFetchProducts } from './useFetchProducts';
import { renderHook } from "@testing-library/react"
import nock from "nock"


const queryClient = new QueryClient()
const wrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}><Provider store={store}>{children}</Provider> </QueryClientProvider>
)

const expectation = nock('http://example.com').get('/api/data').reply(200, {
    isLoading: true,
    // data:''  not working
  })

// const v = vi.mock('./useFetchProducts.js', () => ({ 
//     useFetchProducts: vi.fn()
// }))

vi.mock("../../sort/Sort")

describe('testing the products section', (() => {
    afterEach(() => {
        vi.clearAllMocks();
        vi.resetAllMocks();
      });
    // beforeEach(() => { 
    //     useFetchProducts.mockImplementation(()=>({}))
    // })
    // const  m = vi.spyOn(v,'useFetchProducts')
    // const mockSetActiveIndex = vi.fn();
    // const useFetchProductsSpy = vi.spyOn(useFetchProducts, 'isLoading')
    // beforeEach(() => {
    //      useFetchProducts.mockImplementation(()=> ({isLoading}))
    //  })
    test('renders correctly', () => { 
        render(<QueryClientProvider client={queryClient}><Provider store={store}><MemoryRouter><Products Sort={Sort} Filter={Filter} /> </MemoryRouter> </Provider></QueryClientProvider>)
        expect(screen.getByTestId('products')).toBeInTheDocument();
   })

    // test('sort section is rendered with the DOM',async () => { 
    //    const {getByTestId} =  render(<QueryClientProvider client={queryClient}><Provider store={store}><MemoryRouter><Products Sort={Sort} Filter={Filter} /> </MemoryRouter> </Provider></QueryClientProvider>)
    //     const sort = await waitFor(() => getByTestId('sort-section'));
    //     screen.debug();
    //     expect(sort).toBeInTheDocument();
    // })
    test('check if custom hook has been called',async () => { 
        render(<QueryClientProvider client={queryClient}><Provider store={store}><MemoryRouter><Products Sort={Sort} Filter={Filter} /> </MemoryRouter> </Provider></QueryClientProvider>)
        // const {isLoading} = renderHook(useFetchProducts)
        const { result } = renderHook(() => useFetchProducts(), { wrapper })

        await waitFor(() => {
          return result.current.isSuccess
        })
        
        expect(result.current.isLoading).toBeTruthy()
        screen.debug();
        // screen.debug()
        // expect(useFetchProducts).toHaveBeenCalled();
    }),
    // test('check if custom hook has been called',async () => { 
    //     render(<QueryClientProvider client={queryClient}><Provider store={store}><MemoryRouter><Products Sort={Sort} Filter={Filter} /> </MemoryRouter> </Provider></QueryClientProvider>)
    //     const { result } = renderHook(() => useFetchProducts(), { wrapper })

    //     await waitFor(() => {
    //       return result.current.data
    //     })
        
    //     expect(result.current.data).toEqual({name:'Classic Sneakers'})
    //     screen.debug();
    // }),
    // test('check if sort prop is present', async () => { 
    //     render(<QueryClientProvider client={queryClient}><Provider store={store}><MemoryRouter><Products Sort={Sort} Filter={Filter} /> </MemoryRouter> </Provider></QueryClientProvider>)
    //     // expect()
    //     await waitFor(() => { 
    //         expect(screen.getByTestId('sort')).toBeInTheDocument()
    //     })
    //     screen.debug();
    // })
}))

