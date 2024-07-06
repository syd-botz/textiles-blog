import React, {useEffect, useRef, useState} from "react";
import {
    Circle, Container,
    IconButton,
    Image
} from "@chakra-ui/react";
import {ArrowLeftIcon, ArrowRightIcon, CloseIcon, InfoIcon} from "@chakra-ui/icons";
import AboutImage from "./AboutImage";

export type ImageProps = {
    data: {
        name: string;
        description: string
    }
}

export default function ImageCard(props: ImageProps) {
    const {data: {name, description}} = props
    const [showAboutImage, setShowAboutImage] = useState(false)




    return (

        <div style={{position: 'relative'}} className={'imageWrap'}>
            <Circle
                right={'10px'}
                top={'10px'}
                position={'absolute'}
                size='40px'
                zIndex='1'
                className={'imageIcon'}
            >
                <IconButton
                    onClick={() => {
                        setShowAboutImage(!showAboutImage)
                    }}
                    isRound={true}
                    aria-label='see info'
                    icon={showAboutImage ? <CloseIcon/> : <InfoIcon/>}
                />
            </Circle>
            {showAboutImage ? <AboutImage/> : <div/>}
            <Image
                borderRadius='20'
                src={name}
                alt={description}
                fit='contain'
            />
        </div>
    );
}
