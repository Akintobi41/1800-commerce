import { fireEvent, render, screen } from "@testing-library/react";
import React, { act } from "react";
import { vi } from "vitest";
import { accordionContent } from "../patronize/u_Patronize";
import Details from './Details';



describe('testing details section on homepage', (() => { 
    const mockSetActiveIndex = vi.fn();
    

    test('button is rendered in the DOM', () => { 
        render(<Details el={accordionContent} activeIndex={undefined} setActiveIndex={undefined}/>)
        expect(screen.getByTestId('details-btn')).toBeInTheDocument();
    
    })


    test('summary section is rendered in the DOM when the button is clicked', () => { 
        render(<Details el={accordionContent} activeIndex={undefined} setActiveIndex={mockSetActiveIndex}/>);
        const btn = screen.getByTestId('details-btn')
        act(() => { 
            btn.click();
        })
        
        expect(screen.getByTestId('summary-section')).toBeInTheDocument();
    }),

    test('calls "onClick" prop on button click', () => {
        render(<Details el={accordionContent} activeIndex={undefined} setActiveIndex={mockSetActiveIndex}/>);
        const button = screen.getByTestId('details-btn');
        expect(button).toBeInTheDocument();
       
        fireEvent.click(screen.getByTestId('details-btn'))
        expect(mockSetActiveIndex).toHaveBeenCalled();
      });
    
}))
