
export interface PokemonApiResponse {
    count:    number;
    results:  Pokemon[];
    next?:     string;
    previous?: string|null;
}

export interface Pokemon {
    name: string;
    url:  string;
    id: string;
    img: string;
}