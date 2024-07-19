import {Card, CardBody, CardFooter, Center, Code, Heading, Spacer, Stack, Text} from "@chakra-ui/react";
import React from "react";

export type AboutImageProps = {
    data: ProjectMetaData
}

export type ProjectMetaData = {
    title: string,
    typeOfProject: string,
    madeBy: string,
    patternBy: string,
    date: string
}

export default function AboutImageCard(props: AboutImageProps) {
    const {title, typeOfProject, madeBy, patternBy, date} = props.data
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
                        <Heading>
                            {title}
                        </Heading>
                        <Text>
                            <Stack>
                                <div style={{fontWeight: '900', fontStyle: 'italic'}}>
                                    {typeOfProject} by
                                </div>
                                <Text>
                                    {madeBy}
                                </Text>
                            </Stack>
                        </Text>
                        <Spacer/>
                        <Text>
                            <Stack>
                                <div style={{fontWeight: '900', fontStyle: 'italic'}}>
                                    pattern by
                                </div>
                                <Text>
                                    {patternBy}
                                </Text>
                            </Stack>
                        </Text>
                    </Stack>
                </Center>
            </CardBody>
            <Center>
                <CardFooter>
                    {date}
                </CardFooter>
            </Center>
        </Card>
    )
}
