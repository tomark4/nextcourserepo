import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React, { useEffect, useState } from "react";
import { Layout } from "../../componets/layouts";
import { Pokemon } from "../../interfaces/pokemon.interface";
import {
  findInfavorite,
  toogleFavorite,
} from "../../utils/local-storage-favorites";
import confetti from "canvas-confetti";
import { getPokemonInfo } from "../../utils/get-pokemon-info";

type Props = {
  pokemon: Pokemon;
};

const PokemonDetail: NextPage<Props> = ({ pokemon }) => {
  const [exist, setExist] = useState(false);

  useEffect(() => {
    setExist(findInfavorite(pokemon.id));
  }, [pokemon.id]);

  const onToogleFavorite = () => {
    toogleFavorite(pokemon.id);
    setExist(!exist);

    if (exist) return;

    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: {
        x: 1,
        y: 0,
      },
    });
  };

  // here doesn't exists window, localstorage, etc, del lado del server

  return (
    <Layout title={pokemon.name}>
      <Grid.Container css={{ marginTop: "5px" }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card isHoverable>
            <Card.Body>
              <Card.Image
                width="100%"
                height="200px"
                src={
                  pokemon.sprites.other?.dream_world.front_default ||
                  "/no-image.png"
                }
                alt={pokemon.name}
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header
              css={{ display: "flex", justifyContent: "space-between" }}
            >
              <Text h1 transform="capitalize">
                {pokemon.name}
              </Text>
              <Button
                color="gradient"
                ghost={!exist}
                onClick={onToogleFavorite}
              >
                {exist ? "En favoritos" : "Guardar en favoritos"}
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites:</Text>
              <Container direction="row" display="flex">
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const data = [...Array(151)].map((value, index) => `${index + 1}`);

  return {
    paths: data.map((item) => ({
      params: { id: item },
    })),
    // fallback: false,
    fallback: "blocking",
  };
};

// propiedades statics que se generan en la hora del build
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  const pokemon = await getPokemonInfo(id);

  if (!pokemon) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { pokemon },
    revalidate: 86400, // seconds 60  * 60 *24 cada 24 horas
  };
};

export default PokemonDetail;
