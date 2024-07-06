import ImageCard, {ImageProps} from "./ImageCard";
import {Center, Divider, SimpleGrid, Stack} from "@chakra-ui/react";
import React from "react";

export default function Images() {
    return (
        // todo make groups of images
        <div>
            <Stack spacing="6">
                <ImageCard data={images[2].data}/>
            </Stack>
            <Center height='6'>
            </Center>
            <SimpleGrid columns={{base: 1, md: 2}} spacing="6">
                {chunk(images, images.length / 2).map((testImages, index) => (
                    <Stack key={index} spacing="6">
                        {testImages.map(({data}) => (
                            <ImageCard key={data.name} data={data}/>
                        ))}
                    </Stack>
                ))}
            </SimpleGrid>
            <Center height='6'>
            </Center>
            <Stack spacing="6">
                <ImageCard data={images[3].data}/>
            </Stack>
        </div>
    )
}


const images: ImageProps[] = [
    {
        data: {
            name: 'syd-website-1.JPG',
            description: 'descritpion'
        },
    },
    {
        data: {
            name: 'syd-website-2.JPG',
            description: 'descritpion'
        },
    },
    {
        data: {
            name: 'syd-website-3.JPG',
            description: 'descritpion'
        },
    },
    {
        data: {
            name: 'syd-website-4.JPG',
            description: 'descritpion'
        },
    },
    {
        data: {
            name: 'syd-website-5.JPG',
            description: 'descritpion'
        },
    },
    {
        data: {
            name: 'syd-website-6.JPG',
            description: 'descritpion'
        },
    },
    {
        data: {
            name: 'syd-website-7.JPG',
            description: ''
        },
    },
    {
        data: {
            name: 'syd-website-8.JPG',
            description: ''
        },
    },
    {
        data: {
            name: 'syd-website-9.JPG',
            description: ''
        },
    },
    {
        data: {
            name: 'mothers-day-runner.JPG',
            description: 'neutral table runner'
        }
    }, {
        data: {
            name: 'tie-dye-pullover.JPG',
            description: 'pink and purple tie dye pull over'
        }
    }, {
        data: {
            name: 'flower-gma-quilt.JPG',
            description: 'flowery throw quilt'
        }
    },

]

function chunk<T>(arr: T[], len: number): T[][] {
    let chunks = [];
    let i = 0;
    let n = arr.length;

    while (i < n) {
        chunks.push(arr.slice(i, (i += len)));
    }

    return chunks;
}
