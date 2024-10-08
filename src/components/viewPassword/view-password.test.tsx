import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect } from 'vitest';
import ViewPassword from './ViewPassword';

describe('ViewPassword component', () => {
  test('should render EyeIcon when view is true', () => {
    render(<ViewPassword view={true} />);
    expect(screen.getByTestId('eye-icon')).toBeInTheDocument();
  });

  test('should render EyeSlashIcon when view is false', () => {
    render(<ViewPassword view={false} />);
    expect(screen.getByTestId('eye-slash-icon')).toBeInTheDocument();
  });
});
