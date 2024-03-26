
import { GameQuery } from "../App";
import { useQuery } from "@tanstack/react-query";
import gameService, { Game } from "../services/gameService";
import { Response } from "../services/apiClient";




export default function useGames(gameQuery: GameQuery | null) {
    // return useData<Game>('/games',{ params: {
    //     genres: gameQuery?.genre?.id,
    //     platforms: gameQuery?.platform?.id,
    //     ordering: gameQuery?.ordering,
    //     search: gameQuery?.searchText
    // }},[gameQuery])

    return useQuery<Response<Game[]> ,Error>({
        queryKey: ['games',gameQuery],
        queryFn: () => gameService.getAll(
            {
                     genres: gameQuery?.genre?.id,
                    parent_platforms: gameQuery?.platform?.id,
                     ordering: gameQuery?.ordering,
                     search: gameQuery?.searchText
                 }
        )
    })
}
