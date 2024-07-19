import React from 'react';
import './App.css';
import {Box, ChakraProvider, Heading} from "@chakra-ui/react";
import Images from "./Images";
import {extendTheme} from '@chakra-ui/react'
import '@fontsource/source-serif-pro'
import '@fontsource/source-serif-pro/400.css'
import '@fontsource/source-serif-pro/900.css'
import '@fontsource/source-serif-pro/400-italic.css';
import '@fontsource/source-serif-pro/900-italic.css';

const theme = extendTheme({
    fonts: {
        heading: `'Source Serif Pro', serif`,
        body: `'Source Serif Pro', serif`,
    },
})

function App() {
    return (
        <ChakraProvider theme={theme}>
            <Box height={"-webkit-fit-content"} background={'#f1f2eb'}>
                <Box padding={'8%'}>
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
