import ImageCard from "./ImageCard";
import {Center, SimpleGrid, Stack} from "@chakra-ui/react";
import React from "react";
import {featured, projects} from "./projects";

export default function Images() {
    return (
        <div>
            <Stack spacing="6">
                {featured.map(({data}) => (
                    <ImageCard key={data.name} data={data}/>
                ))}
            </Stack>
            <Center height='6'>
            </Center>
            <SimpleGrid columns={{base: 1, md: 2}} spacing="6">
                {chunk(projects, projects.length / 2).map((images, index) => (
                    <Stack key={index} spacing="6">
                        {images.map(({data}) => (
                            <ImageCard key={data.name} data={data}/>
                        ))}
                    </Stack>
                ))}
            </SimpleGrid>
        </div>
    )
}

function chunk<T>(arr: T[], len: number): T[][] {
    let chunks = [];
    let i = 0;
    let n = arr.length;

    while (i < n) {
        chunks.push(arr.slice(i, (i += len)));
    }

    return chunks;
}
