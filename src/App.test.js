import { render, screen } from '@testing-library/react';
import App from './App';

test('renders reminders app', () => {
  render(<App />);
  const titleElement = screen.getByText(/reminders/i);
  expect(titleElement).toBeInTheDocument();
});
