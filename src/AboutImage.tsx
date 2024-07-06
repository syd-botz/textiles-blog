import {Card, CardBody, CardFooter, Center, Code, Heading, Spacer, Stack, Text} from "@chakra-ui/react";
import React, {useEffect} from "react";


export default function AboutImage() {
    return (
        <Card
            background={'rgba(241,242,235,0.4)'}
            backdropFilter={'blur(3px)'}
            borderRadius='20'
            hidden={false}
            position={'absolute'}
            top={'0'}
            bottom={'0'}
            left={'0'}
            right={'0'}
        >
            <CardBody>
                <Center>
                    <Stack spacing={4}>
                        <Center>
                            <Heading>
                                quilted game table runner
                            </Heading>
                        </Center>
                        <Center>
                            <Text>
                                <Stack>
                                    <Center>
                                        <Code>
                                            sewn by
                                        </Code>
                                    </Center>
                                    <Center>
                                        <Text>
                                            syd
                                        </Text>
                                    </Center>
                                </Stack>
                            </Text>
                        </Center>
                        <Spacer/>
                        <Center>
                            <Text>
                                <Stack>
                                    <Center>
                                        <Code>
                                            pattern by
                                        </Code>
                                    </Center>
                                    <Center>
                                        <Text>
                                            the quilted home handbook
                                        </Text>
                                    </Center>
                                </Stack>
                            </Text>
                        </Center>
                    </Stack>
                </Center>
            </CardBody>
            <Center>
                <CardFooter>
                    2024
                </CardFooter>
            </Center>

        </Card>
    )
}
