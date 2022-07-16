import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";

import { Logo } from './Logo';
import { Profile } from './Profile';
import { NotificationNav } from './NotificationNav';
import { SearchBox } from './SearchBox';
import { useSidebarDrawer } from "../../Contexts/DrawerSidebarContext";
import { RiMenuLine } from "react-icons/ri";

export const Header = () => {

    const { onOpen } = useSidebarDrawer();

    const isWideVersion = useBreakpointValue({
        base:false,
        lg:true,
    });
   
    return(
        
        <Flex as='header' h='20' w='100%' maxW={1200} mx='auto' mt='4' px='6' align='center'>
            
            {!isWideVersion && (
                <IconButton
                    aria-label='Open navigation'
                    icon={<Icon as={RiMenuLine} />}
                    fontSize='24'
                    variant='unstyled'
                    onClick={onOpen}
                    mr='2'
                />
            )}
            
            <Logo/>
            {isWideVersion && <SearchBox />}
            <Flex align='center' ml='auto'>
                <NotificationNav />
                <Profile showProfileData={isWideVersion} />
            </Flex>
        
        </Flex>
   
    )
}