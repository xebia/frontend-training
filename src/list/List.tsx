import { Link } from 'react-router-dom';
import { usePokemonList } from '../api';

function List() {
  const { data, isLoading, error } = usePokemonList();

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
