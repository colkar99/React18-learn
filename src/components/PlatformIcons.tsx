import {FaWindows,FaLinux,FaPlaystation,FaXbox,FaApple,FaAndroid} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { Platform } from '../hooks/useGames'
import { Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';

interface Props {
    platforms: Platform[];
}
export default function PlatformIcons({platforms}: Props) {
    const iconsMap: {[key: string]: IconType} = {
        pc: BsGlobe,
        android: FaAndroid,
        playstation: FaPlaystation,
        windows: FaWindows,
        linux: FaLinux,
        ios: MdPhoneIphone,
        xbox: FaXbox,
        mac: FaApple,
        nintendo: SiNintendo
    }
  return (
    <>
       {platforms.map((platforms) => (
            <Icon key={platforms.id} paddingRight={1} fontSize={'20px'} as={iconsMap[platforms.slug]} color={'grey.500'}/>
        ))}
    </>
     
  )
}
