import { useState } from "react"
import { Spiner } from "./Spiner"
import styled from "@emotion/styled"
import { theme } from "../tokens/theme"

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
            <CardImage>
                <img className="h-[200px] outline-solid4"
                    src={imageUrl}
                    alt={title}
                    loading="lazy"
                    onLoad={() => setIsLoaded(true)}
                />
            </CardImage>
            <CardBody>
                <CardName>{title}</CardName>
                <CardDiscription>{discription}</CardDiscription>
                <CardLink href={linkUrl}>link</CardLink>
            </CardBody>
        </CardContainer>
    )
}

const CardName = styled.h3`
${theme.style.headingSm};
color: ${theme.colors.text.main};
margin-bottom: ${theme.spacing.xs};    
`

const CardImage = styled.div`
    width: 100%;
    aspect-ratio: ${theme.layout.imageRatio};
    background: ${theme.colors.tag};

    img {
        width:100%;
        height: 100%;
        object-fit:cover;
    }
`

const CardLink = styled.a`
    ${theme.style.bodySm}
    color: ${theme.colors.accent}
`

const CardDiscription = styled.p`
    ${theme.style.bodySm};
    color: ${theme.colors.text.sub};
    margin-bottom: ${theme.spacing.md};
`

const CardBody = styled.div`
    padding: ${theme.spacing.md}
`

const CardContainer = styled.div`
    width: ${theme.layout.cardWidth};
    background: ${theme.colors.card};
    border: 1px solid ${theme.colors.border};
    border-radius: ${theme.layout.cardRound};
    overflow: hidden;
    cursor: pointer;
`