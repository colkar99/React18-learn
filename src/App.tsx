import {  Flex, Grid, GridItem, Box, Show } from "@chakra-ui/react"
import Navbar from "./components/Navbar"
import GameGrid from "./components/GameGrid"
import GenresList from "./components/GenresList"
import { useState } from "react";
import { Genres } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatform";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genres | null;
  platform: Platform | null;
  ordering: string;
  searchText: string | undefined;
}



function App() {
  const [gameQuery,setGameQuery] = useState<GameQuery>({} as GameQuery);


  return (
    <>
    <Grid 
      templateAreas={{base: `"nav" "main"`, lg: `"nav nav" "aside main"`}}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr'
      }}
    >
      <GridItem area={"nav"} >
        <Navbar onSearch={(searchText) => setGameQuery({...gameQuery,searchText}) }/>
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX={5}>
            <GenresList selectedGenre={gameQuery?.genre} onSelectGenres={(genre) => setGameQuery({...gameQuery,genre})}/>
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <Box paddingRight={5}>
          <GameHeading gameQuery={gameQuery}/>
          <Flex  marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelector selectedPlatform={gameQuery?.platform} onSelectPlatform={(platform) => setGameQuery({...gameQuery,platform})}/>
            </Box>
            <SortSelector selectedOrdering={gameQuery.ordering} onSelectSort={(ordering) => setGameQuery({...gameQuery,ordering}) }/>
          </Flex>
        </Box>

        <GameGrid  gameQuery={gameQuery}/>
      </GridItem>


    </Grid>
    </>
  )
}

export default App
