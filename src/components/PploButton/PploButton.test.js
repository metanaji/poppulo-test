import { render, screen } from '@testing-library/react';
import PploButton from './PploButton';
import React from 'react';
import '@testing-library/jest-dom'

test('renders learn react link', () => {
  render(<PploButton label='Test label' type='submit'  />);
  const linkElement = screen.getByText(/Test label/i);
  expect(linkElement).toBeInTheDocument();
});
