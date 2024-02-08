export interface PokemonSummary {
  name: string;
  url: string;
}

export interface PokemonList {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonSummary[];
}

export interface Pokemon {
  id: number;
  name: string;
  sprites: { front_default: string };
}
