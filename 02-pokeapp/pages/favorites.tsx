import { Layout } from "../componets/layouts";
import NoFavorite from "../componets/ui/NoFavorite";
import { useEffect, useState } from "react";
import { getStoragePokemons } from "../utils/local-storage-favorites";

const FavoritesPage = () => {
  const [favorites, setFavoritos] = useState<number[]>([]);

  useEffect(() => {
    setFavoritos(getStoragePokemons());
  }, []);

  return (
    <Layout title="Favoritos">
      <NoFavorite />
    </Layout>
  );
};

export default FavoritesPage;
