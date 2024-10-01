// HomeComponents.test.tsx
import { render, screen } from '@testing-library/react';
import HomeComponents from '@components/pages/home/homeComponents';
describe('HomeComponents', () => {
  test('renders all sections correctly', () => {
    render(<HomeComponents />);

    expect(screen.getByTestId('showcase-section')).toBeInTheDocument();
    expect(screen.getByTestId('trending-section')).toBeInTheDocument();
    expect(screen.getByTestId('about-section')).toBeInTheDocument();
    expect(screen.getByTestId('patronize-section')).toBeInTheDocument();
    expect(screen.getByTestId('subscribe-section')).toBeInTheDocument();
    expect(screen.getByTestId('reach-out-section')).toBeInTheDocument();

    const lines = screen.getAllByRole('separator');
    expect(lines.length).toBe(6); 
  });
});
