import { useQuery } from '@tanstack/react-query';
import { fetchInstance } from './fetchInstance';
import { Pokemon, PokemonList } from './types';

export const usePokemonList = () =>
  useQuery({
    queryKey: ['list'],
    queryFn: () => fetchInstance<PokemonList>('https://pokeapi.co/api/v2/pokemon'),
  });

export const usePokemonDetail = (id?: string) =>
  useQuery({
    queryKey: ['detail', id],
    queryFn: () => fetchInstance<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`),
    enabled: !!id,
  });
