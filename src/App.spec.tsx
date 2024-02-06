import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should render', () => {
    render(<App />);

    expect(screen.getByRole('heading', { level: 1, name: 'Pokémon' })).toBeInTheDocument();
  });
});
