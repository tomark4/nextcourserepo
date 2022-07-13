import React from "react";
import { Card, Grid } from "@nextui-org/react";
import PokemonFavoriteCard from "./PokemonFavoriteCard";

type FavoritePokemonProps = {
  pokemons: number[];
};

const FavoritePokemon = ({ pokemons }: FavoritePokemonProps) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {pokemons.map((id: number) => (
          <PokemonFavoriteCard id={id} key={id}/>
      ))}
    </Grid.Container>
  );
};

export default FavoritePokemon;
