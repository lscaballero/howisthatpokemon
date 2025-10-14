import type { Pokemon } from "../types/pokemon.interface";
import { getRamdomInclusive } from "../utils/randomNumber";

const POKEMON_API_URL = "https://pokeapi.co/api/v2/pokemon";
const MAX_POKEMON_COUNT = 151;

export const getRamdomPokemon = async (): Promise<Pokemon> => {
  const randomId = getRamdomInclusive(1, MAX_POKEMON_COUNT);
  const response = await fetch(`${POKEMON_API_URL}/${randomId}`);

  if (!response.ok) {
    throw new Error(`Error fetching pokemon with ID ${randomId}`);
  }

  const data = await response.json();

  return {
    id: data.id,
    name: data.name,
    image: data.sprites.other["official-artwork"].front_default,
  };
};

const normalizePokemonName = (name: string): string => {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]/g, "")
    .replace(/(\(|\))/g, "");
};

export const isPokemonCorrect = (
  pokemonName: string,
  userInput: string
): boolean => {
  return normalizePokemonName(pokemonName) === normalizePokemonName(userInput);
};
