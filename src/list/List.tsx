import { Link } from 'react-router-dom';
import { usePokemonList } from '../api';
import { card, title } from '../styles.css';
import { list, listItem, listItemLink } from './List.css';

function List() {
  const { data, isLoading, error } = usePokemonList();

  return (
    <div className={card}>
      <h1 className={title}>Pokémon</h1>
      {isLoading ? (
        'Loading...'
      ) : error ? (
        'ERROR'
      ) : (
        <ul className={list}>
          {data?.results.map(pokemon => (
            <li className={listItem} key={pokemon.url}>
              <Link className={listItemLink} to={pokemon.url.replace('https://pokeapi.co/api/v2', '')}>
                {pokemon.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default List;
