import { useState } from "react"
import { Spiner } from "./Spiner"
import styled from "@emotion/styled"
import { CARD_HEIGHT, CARD_WIDTH } from "../constants/constants"

interface KeyboardCardProps {
    title: string,
    imageUrl: string,
    discription: string,
    linkUrl: string,
}

export const KeyboardCard = ({
    title,
    imageUrl,
    discription,
    linkUrl
}: KeyboardCardProps) => {
    const [isLoaded, setIsLoaded] = useState(false)
    return (
        <CardContainer>
            {isLoaded ? <Spiner /> : null}
            <img className="h-[200px] outline-solid4"
                src={imageUrl}
                alt={title}
                loading="lazy"
                onLoad={() => setIsLoaded(true)}
            />
            <div>
                <h1>{title}</h1>
                <p>{discription}</p>
                <a href={linkUrl}>link</a>
            </div>
        </CardContainer>
    )
}

const CardContainer = styled.div`
    width : ${CARD_WIDTH};
    height: ${CARD_HEIGHT};
    border: 2px solid #FF8C00;
`