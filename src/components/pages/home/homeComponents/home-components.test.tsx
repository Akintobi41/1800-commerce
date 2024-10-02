import { render, screen } from '@testing-library/react';
import HomeComponents from '@components/pages/home/homeComponents';
import { BrowserRouter } from 'react-router-dom';

describe('HomeComponents', () => {
  test('renders all sections correctly', () => {
    render(
      <BrowserRouter><HomeComponents /></BrowserRouter>  
    );

    expect(screen.getAllByTestId('showcase-images')[0]).toBeInTheDocument();
    expect(screen.getByTestId('trending-section')).toBeInTheDocument();
    expect(screen.getByTestId('about-section')).toBeInTheDocument();
    expect(screen.getByTestId('patronize-section')).toBeInTheDocument();
    expect(screen.getByTestId('subscribe-section')).toBeInTheDocument();
    expect(screen.getByTestId('reach-out-section')).toBeInTheDocument();

    const lines = screen.getAllByRole('separator');
    expect(lines.length).toBe(6); 
  });
});
