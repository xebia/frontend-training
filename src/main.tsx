import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import List from './list/List';
import Detail from './detail/Detail';
import './index.css';

const queryClient = new QueryClient();

async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  const { worker } = await import('./mocks/browser');
  return worker.start({ onUnhandledRequest: 'bypass' });
}

const createRouter = () =>
  createBrowserRouter([
    { path: '/', element: <List /> },
    { path: '/pokemon/:id', element: <Detail /> },
  ]);

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={createRouter()} />
      </QueryClientProvider>
    </React.StrictMode>
  );
});
