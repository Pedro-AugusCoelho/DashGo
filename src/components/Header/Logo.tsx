import React from "react";
import { Text } from "@chakra-ui/react";



export const Logo = () => {
    return(
        <>
            <Text fontSize='3xl' fontWeight='bold' letterSpacing='tight' w='64'>
                Dashgo
                <Text as='span'ml='1' color='linkedin.500'>.</Text>
            </Text>
        </>
    )
}