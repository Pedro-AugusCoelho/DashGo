import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import { RiContactsLine, RiDashboard3Line } from "react-icons/ri";


interface NavSectionPros {
    title:string;
    children?:ReactNode;
}

export const NavSection = ({ title , children }:NavSectionPros) => {
    return(
        <Box>
            <Text fontWeight='bold' color='gray.400' fontSize='small'>{title}</Text>
            <Stack spacing='4' mt='8' align='stretch'>
                {children}
            </Stack>
        </Box>
    )
}