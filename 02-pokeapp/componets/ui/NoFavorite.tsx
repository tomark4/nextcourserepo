import React from "react";
import { Container, Image, Text } from "@nextui-org/react";

const NoFavorite = () => {
  return (
    <Container
      css={{
        display: "flex",
        flexDirection: "column",
        height: "calc(100vh - 100px)",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text h1>no hay favoritos</Text>
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
        width={250}
        height={250}
        css={{ opacity: 0.1 }}
      />
    </Container>
  );
};

export default NoFavorite;
