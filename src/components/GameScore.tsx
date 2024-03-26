
import { Badge } from '@chakra-ui/react'

interface Props{
    metacritic: number
}
export default function GameScore({metacritic}: Props) {
    const color = metacritic > 76 ? 'green' : metacritic < 76 ? 'yellow': '';
  return (
    <Badge colorScheme={color} paddingX={1}>{metacritic}</Badge>
  )
}