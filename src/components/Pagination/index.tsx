import { HStack , Button , Box } from "@chakra-ui/react"
import { PaginationItem } from "./PaginationItem"


export const Pagination = () => {
    return(
        <HStack spacing='6' mt='8' justify='space-between' align='center'>
            <Box>
                <strong>0</strong>-<strong>10</strong> de <strong>100</strong>
            </Box>
                <HStack spacing='2' >
                    <PaginationItem number={1} isCurrent={true} />
                    <PaginationItem number={2} />
                    <PaginationItem number={3} />
                    <PaginationItem number={4} />
                </HStack>
        </HStack>
    )
}