import React, {useState} from "react";
import {
    IconButton,
    Image
} from "@chakra-ui/react";
import {CloseIcon, InfoIcon} from "@chakra-ui/icons";
import AboutImageCard, {ProjectMetaData} from "./AboutImageCard";

export type ImageProps = {
    data: {
        name: string;
        description: string;
        metadata: ProjectMetaData;
    }
}

export default function ImageCard(props: ImageProps) {
    const {name, description, metadata} = props.data
    const [showAboutImage, setShowAboutImage] = useState(false)

    return (
        <div style={{position: 'relative'}} className={'imageWrap'}>
            <IconButton
                onClick={() => {
                    setShowAboutImage(!showAboutImage)
                }}
                isRound={true}
                backgroundColor={'rgba(255,255,255,0.5)'}
                aria-label='see info'
                size={'sm'}
                icon={showAboutImage ? <CloseIcon/> : <InfoIcon/>}
                right={'10px'}
                top={'10px'}
                position={'absolute'}
                zIndex='1'
                className={'imageIcon'}
            />
            {showAboutImage ? <AboutImageCard data={metadata}/> : <div/>}
            <Image
                borderRadius='20'
                src={name}
                alt={description}
                fit='contain'
            />
        </div>
    );
}
