import { useQuery } from '@tanstack/react-query';
import { PokemonList } from '../types';
import { Link } from 'react-router-dom';

function List() {
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
        <ul>
          {data?.results.map(pokemon => (
            <li key={pokemon.url}>
              <Link to={pokemon.url.replace('https://pokeapi.co/api/v2', '')}>{pokemon.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default List;
