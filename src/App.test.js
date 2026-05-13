import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio header', () => {
  render(<App />);
  const headerElement = screen.getByText(/GEOFFREY/i);
  expect(headerElement).toBeInTheDocument();
});
