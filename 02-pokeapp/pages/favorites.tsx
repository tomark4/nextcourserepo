import { Layout } from "../componets/layouts";
import NoFavorite from "../componets/ui/NoFavorite";
import { useEffect, useState } from "react";
import { getStoragePokemons } from "../utils/local-storage-favorites";
import FavoritePokemon from "../componets/pokemon/FavoritePokemon";

const FavoritesPage = () => {
  const [favorites, setFavoritos] = useState<number[]>([]);

  useEffect(() => {
    setFavoritos(getStoragePokemons());
  }, []);

  return (
    <Layout title="Favoritos">
      {favorites.length === 0 ? (
        <NoFavorite />
      ) : (
        <FavoritePokemon pokemons={favorites} />
      )}
    </Layout>
  );
};

export default FavoritesPage;
