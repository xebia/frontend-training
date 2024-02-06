import { render, screen } from '@testing-library/react';
import App from './App';
import { TestQueryClientProvider } from './testUtils';

describe('App', () => {
  it('should render', async () => {
    render(<App />, { wrapper: TestQueryClientProvider });

    expect(screen.getByRole('heading', { level: 1, name: 'Pokémon' })).toBeInTheDocument();

    expect(screen.getByText('Loading...')).toBeInTheDocument();
    expect(await screen.findByText('bulbasaur')).toBeInTheDocument();
  });

  it('should render error', () => {
    render(<App />, { wrapper: TestQueryClientProvider });

    expect(screen.getByRole('heading', { level: 1, name: 'Pokémon' })).toBeInTheDocument();
  });
});
