import { useQuery } from '@tanstack/react-query';

interface PokemonSummary {
  name: string;
  url: string;
}
interface PokemonList {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonSummary[];
}

function App() {
  const { data, isLoading } = useQuery({
    queryKey: ['list'],
    queryFn: () =>
      fetch('https://pokeapi.co/api/v2/pokemon').then(res => {
        const list: Promise<PokemonList> = res.json();
        return list;
      }),
  });

  return (
    <>
      <h1>Pokémon</h1>
      {isLoading ? 'Loading...' : <ul>{data?.results.map(pokemon => <li key={pokemon.url}>{pokemon.name}</li>)}</ul>}
    </>
  );
}

export default App;
