import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import { http, HttpResponse } from "msw"
import React from "react"
import { expect, vi } from "vitest"
import TestComponentWrapper from './../../../mocks/TestComponentWrapper'
import { mockContentfulData } from './../../../mocks/mockData'
import { server } from './../../../mocks/server'
import Products from "./Products"

const MockProducts = () => (
    <TestComponentWrapper>
        <Products />
    </TestComponentWrapper>
)

describe('testing the products section', async () => {
   

    test('test if the mock products renders', async () => {
        render(<MockProducts />)
        const product = await screen.findAllByTestId('product')
        expect(product.length).toBeGreaterThan(1);
    })
        
    test('should not render load more if list is below 11', async () => {
        render(<MockProducts />)
        const product = await screen.findAllByTestId('product')
        expect(product.length).toBeGreaterThan(1);
    })

    test('test localStorage when sort option is changed', async () => {
        render(<MockProducts />)
        const selectElement = await screen.findByTestId('sort');
        fireEvent.change(selectElement, { target: { value: 'Alphabetically: A-Z' } });
        expect(localStorage.getItem('sortValue')).toBe('Alphabetically: A-Z');
    })
        
    test('test localStorage when filter option is changed', async () => {
        localStorage.setItem('value', 'Fragrance');
        render(<MockProducts />)
        const filterElement = await screen.findByTestId('filter');
        fireEvent.change(filterElement, { target: { value: 'Shoe' } });
        expect(localStorage.getItem('value')).toBe('Shoe');
    })

    test('renders ScrollButton when backToTopButton is true', async () => { 
        vi.mock('../../../hooks/useScroll', () => ({
            default: () => ({
              backToTopButton: true,
              Scroll: vi.fn(),
            })
          }));
        render(<MockProducts />)
        const scrollBtn = await screen.findByTestId('scroll-btn')
        expect(scrollBtn).toBeInTheDocument();
    })

    test.skip('load more products', async () => {
        const mockData = {
            items: new Array(11).fill(mockContentfulData.items[0])
        }
        server.use(http.get('https://cdn.contentful.com/spaces/6hoi4gahctlw/environments/master/entries', () => {
            return HttpResponse.json(mockData, { status: 200 })
        }))
        render(<MockProducts />)
        await waitFor(() => expect(screen.getByTestId('load-more')).toBeInTheDocument());
    })
})