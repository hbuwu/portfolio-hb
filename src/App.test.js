import { render, screen } from '@testing-library/react';
import App from './App';

test('Check if title is there', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hanori/i);
  expect(linkElement).toBeInTheDocument();
});
