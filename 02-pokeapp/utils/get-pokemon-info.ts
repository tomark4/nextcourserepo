import pokeApi from "../data/api";
import { Pokemon } from "../interfaces/pokemon.interface";

export const getPokemonInfo = async (value: string) => {
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${value}`);

  return {
    id: data.id,
    name: data.name,
    sprites: data.sprites,
  };
};
