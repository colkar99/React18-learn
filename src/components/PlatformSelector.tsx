import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatform from '../hooks/usePlatform'
import { Platform } from '../services/platformService';

interface Props{
    onSelectPlatform: (platform: Platform) => void;
    selectedPlatform: Platform | null;
}
export default function PlatformSelector({onSelectPlatform,selectedPlatform}: Props) {
    const {data: platforms,error} = usePlatform();
    
    if(error) return null;
  return (
    <div >
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
                {selectedPlatform?.name || 'Select Platform'}
            </MenuButton>
            <MenuList>
                {platforms?.results.map((platform) => <MenuItem key={platform.id} onClick={() => onSelectPlatform(platform)}>{platform.name}</MenuItem>)}
            </MenuList>
        </Menu>
    </div>

  )
}
