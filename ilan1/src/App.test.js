import { render, screen } from '@testing-library/react';
import App from './App';

test('renders iş ilan portalı title', () => { 
  render(<App />);
  const titleElement = screen.getByText(/iş ilan portalı/i); 
  expect(titleElement).toBeInTheDocument();
});
