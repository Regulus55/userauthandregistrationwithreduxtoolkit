import React, {useEffect} from 'react';
import {
    Box,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    VStack,
    Input,
    Stack,
    useColorModeValue, Button, Container
} from "@chakra-ui/react";
import {Form, useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {clearState, signupSelector, signupUser} from "../store/slices/SignupSlice.jsx";
import {useNavigate} from "react-router-dom";

const Signup = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const {isFetching, isSuccess, isError, errorMessage} = useSelector(signupSelector)

    const {register, errors, handleSubmit} = useForm()
    const onSubmit = (data) => {
        console.log('+++data',data)
        const userInput = {
            userName: data.userName,
            nickName: data.nickName,
            email: data.email,
            phone: data.phone,
            password: data.password,
            consent: {
                overTwenty: data.overTwenty,
                agreeOfTerm: data.agreeOfTerm,
                agreeOfPersonalInfo: data.agreeOfPersonalInfo,
                agreeOfMarketing: data.agreeOfMarketing,
                etc: data.etc
            }
        }
        console.log('userinput',userInput)
        dispatch(signupUser(userInput))
    }

    useEffect(()=>{
        if (isError){
            dispatch(clearState())
        }

        if(isSuccess){
            dispatch(clearState())
            navigate('/login')
        }


    },[isError, isSuccess])

    return (
        <Flex
            minH={"100vh"}
            align={"center"}
            justify={"center"}
            bg={useColorModeValue("gray.50", "gray.800")}
        >
            <Stack  spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
                <Stack align={"center"}>
                    <Heading fontSize={"4xl"} textAlign={"center"}>
                        Sign up
                    </Heading>
                </Stack>
                <Box
                    rounded={"lg"}
                    bg={useColorModeValue("white", "gray.700")}
                    boxShadow={"lg"}
                    p={8}
                >
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Stack spacing={4}>
                            <HStack>
                                <Box>
                                    <FormControl
                                        id={'userName'}
                                        isRequired
                                    >
                                        <FormLabel>
                                            userName
                                        </FormLabel>
                                        <Input
                                            type={'text'}
                                            {...register('userName', {required: true})}
                                        />
                                    </FormControl>

                                    <FormControl
                                        id={'nickName'}
                                        isRequired
                                    >
                                        <FormLabel>
                                            nickName
                                        </FormLabel>
                                        <Input
                                            type={'text'}
                                            {...register('nickName', {required: true})}
                                        />
                                    </FormControl>
                                </Box>
                            </HStack>

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

                            <FormControl
                                id={'phone'}
                                isRequired
                            >
                                <FormLabel>
                                    phone
                                </FormLabel>
                                <Input
                                    type={'phone'}
                                    {...register('phone', {required: true})}
                                />
                            </FormControl>

                            {/*체크박스*/}

                            <Stack>
                                <FormControl
                                    id={'overTwenty'}
                                    isRequired
                                >
                                    <FormLabel>
                                        consent
                                    </FormLabel>
                                    <Checkbox
                                        type={'checkbox'}
                                        {...register('overTwenty', {required: true})}
                                    >
                                        over twenty
                                    </Checkbox>
                                </FormControl>
                            </Stack>

                            <FormControl
                                id={'agreeOfTerm'}
                                isRequired
                            >
                                <Checkbox
                                    type={"checkbox"}
                                    {...register('agreeOfTerm', {required: true})}
                                >
                                    agree of term
                                </Checkbox>
                            </FormControl>

                            <FormControl
                                id={'agreeOfPersonalInfo'}
                                isRequired
                            >
                                <Checkbox
                                    type={"checkbox"}
                                    {...register('agreeOfPersonalInfo')}
                                >
                                    agree of personal info
                                </Checkbox>
                            </FormControl>

                            <FormControl
                                id={'agreeOfMarketing'}
                            >
                                <Checkbox
                                    type={'checkbox'}
                                    {...register('agreeOfMarketing')}
                                >
                                    agree of marketing
                                </Checkbox>
                            </FormControl>

                            <FormControl
                                id={'etc'}
                            >
                                <Checkbox
                                    type={'checkbox'}
                                    {...register('etc')}
                                >
                                    etc
                                </Checkbox>
                            </FormControl>

                            <Button type={'submit'}>button</Button>
                        </Stack>
                    </form>
                </Box>
            </Stack>

        </Flex>
    );
};

export default Signup;