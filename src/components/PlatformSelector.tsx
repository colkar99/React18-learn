import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatform, { Platform } from '../hooks/usePlatform'

interface Props{
    onSelectPlatform: (platform: Platform) => void;
    selectedPlatform: Platform | null;
}
export default function PlatformSelector({onSelectPlatform,selectedPlatform}: Props) {
    const {datas: platforms,error} = usePlatform();
    
    if(error) return null;
  return (
    <div >
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
                {selectedPlatform?.name || 'Select Platform'}
            </MenuButton>
            <MenuList>
                {platforms.map((platform) => <MenuItem key={platform.id} onClick={() => onSelectPlatform(platform)}>{platform.name}</MenuItem>)}
            </MenuList>
        </Menu>
    </div>

  )
}
