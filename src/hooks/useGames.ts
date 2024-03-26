
import useData from "./useData";
import { GameQuery } from "../App";

export interface Platform {
    id: number,
    name: string,
    slug: string
}
export interface Game{
    id: number,
    name: string,
    background_image: string,
    parent_platforms: [{platform: Platform}],
    metacritic: number
}


export default function useGames(gameQuery: GameQuery | null) {
    return useData<Game>('/games',{ params: {
        genres: gameQuery?.genre?.id,
        platforms: gameQuery?.platform?.id,
        ordering: gameQuery?.ordering,
        search: gameQuery?.searchText
    }},[gameQuery])
}
