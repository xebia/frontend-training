import { render, screen } from '@testing-library/react';
import Detail from './Detail';
import { TestQueryClientProvider } from '../testUtils';
import { server } from '../mocks/node';
import { HttpResponse, http } from 'msw';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('Detail', () => {
  const renderComponent = () =>
    render(<Detail />, {
      wrapper: ({ children }) => (
        <TestQueryClientProvider>
          <MemoryRouter initialEntries={['/pokemon/1']}>
            <Routes>
              <Route path="/pokemon/:id" element={children} />
            </Routes>
          </MemoryRouter>
        </TestQueryClientProvider>
      ),
    });

  it('should render', async () => {
    renderComponent();

    expect(screen.getByText('Loading...')).toBeInTheDocument();

    expect(await screen.findByRole('heading', { level: 1, name: 'bulbasaur' })).toBeInTheDocument();
    expect(await screen.findByText('ID: 1')).toBeInTheDocument();
    expect(await screen.findByRole('img')).toHaveAttribute(
      'src',
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
    );
  });

  it('should render error', async () => {
    server.use(
      http.get('*/v2/pokemon/:id', () => {
        return new HttpResponse(null, { status: 500 });
      })
    );

    renderComponent();

    expect(await screen.findByText('ERROR')).toBeInTheDocument();
  });
});
