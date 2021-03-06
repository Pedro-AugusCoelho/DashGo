import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react"
import Link from "next/link";
import { Input } from "../../components/Form/Input";
import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";

import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type CreateUserFormData = {
    name:string;
    email:string;
    password:string;
    passwordConfirm:string;
}
  
const CreateUserFormSchema = yup.object().shape({
    name:yup.string().required('Nome obrigatório'),
    email:yup.string().required('E-mail obrigatório').email('E-mail inválido'),
    password:yup.string().required('Senha obrigatória').min(6 , 'No mínimo 6 caracteres'),
    passwordConfirm:yup.string().oneOf([
        null,
        yup.ref('password')
    ], 'As senhas precisam ser iguais'),
})
  


const CreateUser = () => {
    
    const { register , handleSubmit, formState} = useForm({
        resolver:yupResolver(CreateUserFormSchema)
    })

    const handleCreateUser:SubmitHandler<CreateUserFormData> = (values) => {
        console.log(values);
    }
    
    return(
        <Box>
            <Header />
            <Flex w='100%' my='6' maxW={1200} mx='auto' px='6'>
                <Sidebar />
                
                <Box as='form' flex='1' borderRadius={8} bg='gray.800' p={['6','8']} onSubmit={handleSubmit(handleCreateUser)}>
                    <Heading fontSize='lg' fontWeight='normal' >Criar usuário</Heading>

                    <Divider my='6' borderColor='gray.700'/>

                    <VStack spacing='8'>
                        <SimpleGrid minChildWidth='240px' spacing={['6','8']} w='100%'>
                            <Input name='name' label='Nome completo' error={formState.errors.name} {...register('name')}/>
                            <Input name='email' label='email' type='email'  error={formState.errors.email} {...register}  />
                        </SimpleGrid>

                        <SimpleGrid minChildWidth='240px' spacing={['6','8']} w='100%'>
                            <Input name='password' label='Senha' type='password' error={formState.errors.password} {...register('password')}  />
                            <Input name='password_confirmation' label='Digite a senha novamente' type='password' error={formState.errors.passwordConfirm} {...register('passwordConfirm')}  />
                        </SimpleGrid>
                    </VStack>

                    <Flex mt='8' justify='flex-end'>
                        <HStack spacing='4'>
                            <Link href='/users' passHref>
                                <Button as='a' colorScheme='whiteAlpha'>Cancelar</Button>
                            </Link>
                            <Button colorScheme='linkedin' isLoading={formState.isSubmitting} type='submit'>Salvar</Button>
                        </HStack>
                    </Flex>
                        
                </Box>
            </Flex>
        </Box>
    )
}

export default CreateUser;