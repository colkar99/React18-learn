
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import SkelitonCard from "./SkelitonCard";
import GameCardContainer from "./GameCardContainer";

import { GameQuery } from "../App";

interface Props{
    gameQuery: GameQuery | null;
}
export default function GameGrid({gameQuery}: Props) {
    const {datas: games,error,loading} = useGames(gameQuery);
    const skeletons = [1,2,3,4,5,6];
  return (
    <>
    {error && <Text>{error}</Text>}
    <SimpleGrid columns={{sm:1,md:2,lg:3,xl:3}} spacing={5}>
         {loading && skeletons.map((s) => <GameCardContainer key={s}><SkelitonCard /></GameCardContainer> )}
        {games.map((game) => {
            return <GameCardContainer key={game.id}><GameCard game={game}/></GameCardContainer>
        })}
    </SimpleGrid>
    
    </>
  )
}
