import { render, screen } from '@testing-library/react';
import App from './App';

describe('findByText Examples', () => {
  it('should show a button that promts the user to enrol', async () => { 
    render(<App />);
    const button = screen.getByText(/Enrol in courses now/i);
    expect(button).toBeInTheDocument();
  });
});
