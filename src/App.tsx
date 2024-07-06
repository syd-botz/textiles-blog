import React from 'react';
import './App.css';
import {Box, ChakraProvider, Heading, Stack, Text, Image, SimpleGrid, Flex} from "@chakra-ui/react";
import Images from "./Images";

function App() {
    return (
        <ChakraProvider>
            {/*<Box height={'100dvh'} bgGradient='linear(to-b, #f1f2eb, #d4e32d)'>*/}
            <Box height={"-webkit-fit-content"} background={'#f1f2eb'}>
                <Box padding={30}>
                    <Box width={'100%'} p={50}>
                        <Heading color={'#e3a02d'} size={'4xl'}>syd botz</Heading>
                    </Box>
                    <Images/>
                </Box>
            </Box>
        </ChakraProvider>
    );
}

export default App;
