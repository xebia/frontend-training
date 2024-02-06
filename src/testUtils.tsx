import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

export const TestQueryClientProvider = ({ ...props }) => <QueryClientProvider client={queryClient} {...props} />;
