import { Flex , Box, Heading, Button, Icon, Table, Thead, Tr, Th, Checkbox, Tbody, Td, Text } from '@chakra-ui/react';
import { RiAddLine, RiPencilLine } from 'react-icons/ri';


import { Header } from '../../components/Header';
import { Pagination } from '../../components/Pagination';
import { Sidebar } from '../../components/Sidebar';

const  Users = () => {
    return(
        <Box>
            <Header />
            
            <Flex w='100%' my='6' maxW={1200} mx='auto' px='6'>
                <Sidebar />

                <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
                    <Flex mb='8'justify='space-between'align='center'>
                        <Heading size='lg' fontWeight='normal'>
                            Usuários
                        </Heading>
                        
                        <Button 
                            as='a'
                            size='sm'
                            fontSize='sm'
                            colorScheme='linkedin'
                            leftIcon={<Icon as={RiAddLine} fontSize='20' />}
                        >
                            Criar Novo
                        </Button>
                    
                    </Flex>

                    <Table colorScheme='whiteAlpha'>
                        <Thead>
                            <Tr>
                                <Th px='6' color='gray.300' w='8'>
                                    <Checkbox colorScheme='linkedin' />
                                </Th>
                                
                                <Th>Usuários</Th>
                                <Th>Data de cadasto</Th>
                                <Th w='8'></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                
                                <Td px='6'>
                                    <Checkbox colorScheme='linkedin' />
                                </Td>
                                
                                <Td>
                                    <Box>
                                        <Text fontWeight='bold'>Pedro A. Coelho</Text>
                                        <Text fontWeight='normal' color='gray.300'>pedrocoelho@gmail.com</Text>
                                    </Box>
                                </Td>

                                <Td>01 de Abril,2022</Td>
                                
                                <Td>
                                    <Button 
                                        as='a'
                                        size='sm'
                                        fontSize='sm'
                                        colorScheme='telegram'
                                        leftIcon={<Icon as={RiPencilLine} fontSize='16' />}
                                    >
                                        Editar
                                    </Button>
                                </Td>
                                
                            </Tr>
                        </Tbody>
                    </Table>

                    <Pagination />
                </Box>
            </Flex>
        </Box>
    )
}

export default Users;