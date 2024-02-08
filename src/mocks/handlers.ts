import { HttpResponse, http } from 'msw';
import { Pokemon, PokemonSummary } from '../types';

const createPokemonSummary = (overrides: Partial<PokemonSummary> = {}): PokemonSummary => ({
  name: 'bulbasaur',
  url: 'https://pokeapi.co/api/v2/pokemon/1/',
  ...overrides,
});

const createPokemonList = () => ({
  count: 2,
  prev: null,
  next: null,
  results: [
    createPokemonSummary(),
    createPokemonSummary({ name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' }),
  ],
});

export const createPokemon = (overrides: Partial<Pokemon> = {}): Pokemon => ({
  id: 1,
  name: 'bulbasaur',
  sprites: {
    front_default: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${overrides.id ?? 1}.png`,
  },
  ...overrides,
});

export const handlers = [
  http.get('*/v2/pokemon', () => HttpResponse.json(createPokemonList())),
  http.get('*/v2/pokemon/:id', req => HttpResponse.json(createPokemon({ id: +req.params['id'] }))),
];
