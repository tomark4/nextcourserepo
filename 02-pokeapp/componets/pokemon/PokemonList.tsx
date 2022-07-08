import React from 'react'
import { Pokemon } from '../../interfaces/pokeapi.interface';
import { Grid } from '@nextui-org/react';
import PokemonItem from './PokemonItem';

type Props = {
    pokemons: Pokemon[]
}

const PokemonList = ({pokemons}:Props) => {
    return (
        <Grid.Container gap={2} justify="flex-start">
            {pokemons.map( (item:Pokemon) =>  (
                <PokemonItem key={item.id} pokemon={item} />
            ))}
        </Grid.Container>
    )
}

export default PokemonList