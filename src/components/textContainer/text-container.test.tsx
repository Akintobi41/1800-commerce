import { render, screen } from '@testing-library/react';
import TextContainer from '@components/textContainer';
describe('TextContainer', () => {
  test('renders children correctly', () => {
    render(<TextContainer className="custom-class">Hello, World!</TextContainer>);
    
    // Check if the text is rendered
    expect(screen.getByText('Hello, World!')).toBeInTheDocument();
    
    // Check if the correct class name is applied
    const textElement = screen.getByText('Hello, World!');
    expect(textElement).toHaveClass('text-[2.35rem] font-bold custom-class');
  });

  test('renders without additional class name', () => {
    render(<TextContainer>Hello, World!</TextContainer>);
    
    // Check if the text is rendered
    expect(screen.getByText('Hello, World!')).toBeInTheDocument();
    
    // Check if the default classes are applied
    const textElement = screen.getByText('Hello, World!');
    expect(textElement).toHaveClass('text-[2.35rem] font-bold');
  });
});
