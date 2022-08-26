import { render, screen } from '@testing-library/react';
import App from './components/main/App';

test('renders Enter GitHub Handle search box place holder', () => {
  render(<App />);
  const searchElement = screen.getByPlaceholderText('Enter GitHub Handle');
  expect(searchElement).toBeInTheDocument();
});
