import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import { Layout } from "../../componets/layouts";
import pokeApi from "../../data/api";
import { Pokemon } from "../../interfaces/pokemon.interface";

type Props = {
  pokemon: Pokemon;
};

const PokemonDetail: NextPage<Props> = ({ pokemon }) => {
  const router = useRouter();

  return (
    <Layout title="Some pokemon">
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
              <Button color="gradient" ghost>
                Guardar en favoritos
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
    fallback: false,
  };
};
// propiedades statics que se generan en la hora del build
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };

  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);

  return {
    props: { pokemon: data },
  };
};

export default PokemonDetail;
