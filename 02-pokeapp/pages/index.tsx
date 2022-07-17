import { NextPage } from "next";
import { Layout } from "../componets/layouts";
import PokemonList from "../componets/pokemon/PokemonList";
import pokeApi from "../data/api";
import { Pokemon, PokemonApiResponse } from "../interfaces/pokeapi.interface";

type Props = {
  pokemons: Pokemon[];
};

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title="My PokedexApp">
      <PokemonList pokemons={pokemons} />
    </Layout>
  );
};

/** only used in pages */
export async function getStaticProps() {
  const { data } = await pokeApi.get<PokemonApiResponse>(`/pokemon?limit=151`);

  const pokemons = data.results.map((item) => {
    const id = item.url.split("/")[6];
    return {
      ...item,
      id: String(id),
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`,
    };
  });

  return {
    props: { pokemons },
  };
}

export default HomePage;
