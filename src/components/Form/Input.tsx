import {
     FormControl, 
     FormErrorMessage, 
     FormLabel, 
     Input as ChakraInput , 
     InputProps as ChakraInputProps
    } from "@chakra-ui/react";
import { forwardRef , ForwardRefRenderFunction } from "react";
import { FieldError } from 'react-hook-form';


interface InputProps extends ChakraInputProps {
    name:string;
    label?:string;
    error?:FieldError;
}


const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ( {error = null, name, label, ...rest } , ref) => {
    return(
        <FormControl isInvalid={!!error}>
            {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
            <ChakraInput 
                id={name}
                name={name}
                focusBorderColor='linkedin.500'
                bgColor='gray.900'
                variant='filled'
                size='lg'
                ref={ref}
                _hover={{
                    bgColor:'gray.900'
                }}
                {...rest}
            />
            {!!error && (
                <FormErrorMessage>
                    {error.message}
                </FormErrorMessage>
            )}
      </FormControl>
    )
}

export const Input = forwardRef(InputBase);