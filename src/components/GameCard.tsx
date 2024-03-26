import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react'
import { Game } from '../hooks/useGames'
import PlatformIcons from './PlatformIcons'
import GameScore from './GameScore'
import CropImageUrl from '../services/imageUrl'

interface Props{
    game: Game
}
export default function GameCard({game}: Props) {
  return (
    <Card>
        <Image src={CropImageUrl(game.background_image)}/>
        <CardBody>
            <HStack justifyContent='space-around' marginBottom={3}>
                <PlatformIcons platforms={game.parent_platforms.map((p) => p.platform)}/>
                <GameScore metacritic={game.metacritic}/>
            </HStack>
            <Heading fontSize={'2xl'} marginY={2}>{game.name}</Heading>
        </CardBody>
    </Card>
  )
}
