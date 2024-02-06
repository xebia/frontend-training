import { render, screen } from '@testing-library/react';
import App from './App';
import { TestQueryClientProvider } from './testUtils';
import { server } from './mocks/node';
import { HttpResponse, http } from 'msw';

describe('App', () => {
  it('should render', async () => {
    render(<App />, { wrapper: TestQueryClientProvider });

    expect(screen.getByRole('heading', { level: 1, name: 'Pokémon' })).toBeInTheDocument();

    expect(screen.getByText('Loading...')).toBeInTheDocument();

    expect(await screen.findAllByRole('listitem')).toHaveLength(2);
    expect(await screen.findByText('bulbasaur')).toBeInTheDocument();
  });

  it('should render error', async () => {
    server.use(
      http.get('*/v2/pokemon', () => {
        return new HttpResponse(null, { status: 500 });
      })
    );

    render(<App />, { wrapper: TestQueryClientProvider });

    expect(await screen.findByText('ERROR')).toBeInTheDocument();
  });
});
