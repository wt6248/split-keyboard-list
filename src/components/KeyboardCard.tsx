import { useState } from "react"
import { Spiner } from "./Spiner"

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
        <div className=" w-[300px] h-[300px] outline-1 outline-amber-400">
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
        </div>
    )
}
