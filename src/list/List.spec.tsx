import { render, screen } from '@testing-library/react';
import List from './List';
import { TestQueryClientProvider } from '../testUtils';
import { server } from '../mocks/node';
import { HttpResponse, http } from 'msw';
import { MemoryRouter } from 'react-router-dom';

describe('List', () => {
  const renderComponent = () =>
    render(<List />, {
      wrapper: ({ children }) => (
        <TestQueryClientProvider>
          <MemoryRouter>{children}</MemoryRouter>
        </TestQueryClientProvider>
      ),
    });

  it('should render', async () => {
    renderComponent();

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

    renderComponent();

    expect(await screen.findByText('ERROR')).toBeInTheDocument();
  });
});
