import React from "react";
import { Card, Grid, Row, Text } from "@nextui-org/react";
import { Pokemon } from "../../interfaces/pokeapi.interface";
import { useRouter } from "next/router";

type Props = {
  pokemon: Pokemon;
};

const PokemonItem = ({ pokemon }: Props) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/name/${pokemon.name}`);
  };

  return (
    <Grid xs={6} sm={3} md={2} xl={1}>
      <Card isHoverable isPressable onClick={handleClick}>
        <Card.Body css={{ p: 1 }}>
          <Card.Image src={pokemon.img} width="100%" height="140px" />
        </Card.Body>
        <Card.Footer>
          <Row justify="space-between">
            <Text transform="capitalize">{pokemon.name}</Text>
            <Text>#{pokemon.id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};

export default PokemonItem;
