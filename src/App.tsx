import { useQuery } from '@tanstack/react-query';
import { PokemonList } from './types';

function App() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['list'],
    queryFn: () =>
      fetch('https://pokeapi.co/api/v2/pokemon').then(res => {
        if (!res.ok) {
          throw res;
        }

        const list: Promise<PokemonList> = res.json();
        return list;
      }),
  });

  return (
    <>
      <h1>Pokémon</h1>
      {isLoading ? (
        'Loading...'
      ) : error ? (
        'ERROR'
      ) : (
        <ul>{data?.results.map(pokemon => <li key={pokemon.url}>{pokemon.name}</li>)}</ul>
      )}
    </>
  );
}

export default App;
