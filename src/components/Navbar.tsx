import { HStack, Image } from "@chakra-ui/react";
import logo from '../assets/Logo/logo.webp';
import ThemeToggleSwitch from "./ThemeToggleSwitch";
import SearchGame from "./SearchGame";
interface Props {
    onSearch: (searchText: string | undefined) => void
}

export default function Navbar({onSearch}: Props) {
  return (
    <HStack justify={'space-between'} padding={'10px'}>
        <Image src={logo} boxSize={'60px'}/>
        <SearchGame onSearch={onSearch}/>
        <ThemeToggleSwitch/>
    </HStack>
  )
}