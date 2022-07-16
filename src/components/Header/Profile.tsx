import { Box, Flex, Text, Avatar } from "@chakra-ui/react";
import React from "react";

interface ProfileProps {
    showProfileData?:boolean;
}



export const Profile = ({showProfileData = true}:ProfileProps) => {
    return(
        
        <Flex align='center'>
            {showProfileData && (
                <Box mr='4' textAlign='right'>
                    <Text>Pedro A.</Text>
                            
                    <Text color='gray.300' fontSize='small'>
                        peaugusto.coelho@gmail.com
                    </Text>
                </Box>
            )}
            <Avatar size='md' name='Pedro Augusto' src='https://github.com/Pedro-AugusCoelho.png'/>
        </Flex>
    )
}