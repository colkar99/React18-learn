import useGenres from '../hooks/useGenres'
import { Button, HStack, Heading, Image, List, ListItem ,Spinner} from '@chakra-ui/react';
import CropImageUrl from '../services/imageUrl';
import { Genres } from '../services/genresService';

interface Props{
    onSelectGenres: (genre: Genres) => void 
    selectedGenre: Genres | null
}
export default function GenresList({selectedGenre,onSelectGenres}: Props) {
    const {data,isLoading} = useGenres();

    if(isLoading) return <Spinner/>
    return (
        <>
        <Heading fontSize='2xl' marginBottom={5}>Genres</Heading>
        <List>
            {data?.results?.map((genre) => {
                return <ListItem key={genre.id} paddingY={2}>
                    <HStack>
                        <Image boxSize='36px' src={CropImageUrl(genre.image_background)} borderRadius={10} objectFit='cover'/>
                        <Button variant={'link'} fontWeight={selectedGenre?.id == genre.id ? 'bold': 'normal'} paddingX={1} onClick={() => onSelectGenres(genre)}>{genre.name}</Button>
                    </HStack>
                </ListItem>
            })}
        </List>
        </>

  )
}
