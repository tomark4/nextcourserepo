const toogleFavorite = (id: number) => {
  let currentData: number[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );
  if (currentData.includes(id)) {
    currentData = currentData.filter((pokeId) => pokeId !== id);
  } else {
    currentData.push(id);
  }

  localStorage.setItem("favorites", JSON.stringify(currentData));
};

const findInfavorite = (id: number): boolean => {
  if (typeof window === "undefined") return false;
  const f: number[] = JSON.parse(localStorage.getItem("favorites") || "[]");
  return f.includes(id);
};

const getStoragePokemons = ():number[] => {
  return JSON.parse(localStorage.getItem("favorites") || "[]");
}

export { toogleFavorite, findInfavorite, getStoragePokemons };
