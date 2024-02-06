import { HttpResponse, http } from 'msw';
import { PokemonSummary } from '../types';

const createPokemon = (overrides: Partial<PokemonSummary> = {}): PokemonSummary => ({
  name: 'bulbasaur',
  url: 'https://pokeapi.co/api/v2/pokemon/1/',
  ...overrides,
});

const createPokemonList = () => ({
  count: 2,
  prev: null,
  next: null,
  results: [createPokemon(), createPokemon({ name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' })],
});

export const handlers = [
  http.get('*/v2/pokemon', () => {
    return HttpResponse.json(createPokemonList());
  }),
];
