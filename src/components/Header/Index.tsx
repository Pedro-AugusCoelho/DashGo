import { Flex } from "@chakra-ui/react";

import { Logo } from './Logo';
import { Profile } from './Profile';
import { NotificationNav } from './NotificationNav';
import { SearchBox } from './SearchBox';

export const Header = () => {
    return(
        
        <Flex as='header' h='20' w='100%' maxW={1200} mx='auto' mt='4' px='6' align='center'>
            <Logo />
            <SearchBox />
            <Flex align='center' ml='auto'>
                <NotificationNav />
                <Profile />
            </Flex>
        
        </Flex>
   
    )
}