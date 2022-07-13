import { Card, Grid } from "@nextui-org/react";
import React from "react";
import { useRouter } from "next/router";

type PokemonFavoriteCardProps = {
  id: number;
};

const PokemonFavoriteCard = ({ id }: PokemonFavoriteCardProps) => {
  const router = useRouter();

  const handlePress = () => {
    router.push(`/pokemon/${id}`);
  };

  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={id}>
      <Card isHoverable isPressable css={{ padding: 10 }} onPress={handlePress}>
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          width={"100%"}
          height={"140px"}
        />
      </Card>
    </Grid>
  );
};

export default PokemonFavoriteCard;
