import React from 'react';
import {Box, Button, Flex, FormControl, FormLabel, Heading, Input, Stack, useColorModeValue} from "@chakra-ui/react";
import {useForm} from "react-hook-form";

const Login = () => {
    const {register, errors, handleSubmit} = useForm();
    const onSubmit = (data) => {
        const userInput = {
            email: data.email,
            password: data.password
        }
        console.log('logininput', userInput)
    }

    return (
        <Flex
            minH={"100vh"}
            w={"100%"}
            align={"center"}
            justfy={"center"}
            bg={useColorModeValue("gray.50", "gray.800")}
        >
            <Stack
                spacing={8}
                mx={"auto"}
                maxW={"lg"}
                py={12}
                px={6}
            >
                <Stack align={"center"}>
                    <Heading fontSize={"4xl"} textAlign={"center"}>
                        Login
                    </Heading>
                </Stack>
                <Box
                    rounded={"lg"}
                    bg={useColorModeValue("white", "gray.700")}
                    boxShadow={"lg"}
                    p={8}
                >
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormControl
                            id={'email'}
                            isRequired
                        >
                            <FormLabel>
                                email
                            </FormLabel>
                            <Input
                                type={'email'}
                                {...register('email', {pattern: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i})}
                            />
                        </FormControl>

                        <FormControl
                            id={'password'}
                            isRequired
                        >
                            <FormLabel>
                                password
                            </FormLabel>
                            <Input
                                type={'password'}
                                {...register('password', {required: true})}
                            />
                        </FormControl>


                        <Button type={'submit'}>button</Button>
                    </form>
                </Box>

            </Stack>
        </Flex>
    );
};

export default Login;