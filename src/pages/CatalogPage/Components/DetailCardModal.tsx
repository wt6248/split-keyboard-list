import { theme } from "@/tokens/theme"
import { detailInfoKeys, type KeyboardRow } from "@/types/keyboard"
import styled from "@emotion/styled"
import { useEffect, useRef, type ReactNode } from "react"

interface detailCardModalParams {
    isOpen: boolean
    onClose: () => void
    keyboard: KeyboardRow | null
}
interface detailCardParams {
    keyboard: KeyboardRow | null
}
export const DetailCardModal = ({ isOpen, onClose, keyboard }: detailCardModalParams) => {
    const dialogRef = useRef<HTMLDialogElement>(null)
    useEffect(() => {
        const dialog = dialogRef.current
        if (!dialog) return;

        if (isOpen) {
            dialog.showModal()
        } else {
            dialog.close()
        }
    }, [isOpen])

    return (
        <DetailCardDialog
            ref={dialogRef}
            onClose={onClose}
            onClick={(e) => {
                if (e.target === dialogRef.current) onClose()
            }}
            className="flex items-center justify-center"
        >
            <DetailCard keyboard={keyboard} />
            {/* <button onClick={onClose}>닫기</button> */}
        </DetailCardDialog>
    )
}

const DetailCard = ({ keyboard }: detailCardParams) => {
    return (<div className="h-[700px] w-[630px] ">
        {/* // 키보드 이미지가 div 상단 절반을 차지함. */}
        <DetailCardImage
            src={keyboard?.image_url}
        />
        <div className="flex flex-col p-[32px] h-[50%] bg-card">
            <p className=" text-heading-lg text-text-main pb-[8px]">{keyboard?.name}</p>
            <p className=" text-body-sm text-text-sub pb-[24px]">{keyboard?.description}</p>
            <div className="grid grid-cols-2 gap-ms">
                    {keyboard && detailInfoKeys.map((key) => (
                        <div key={key}>
                            <span className="text-label text-text-sub pr-1.5">{key}</span>
                            <span className="text-sm text-text-main">{keyboard?.[key] ?? 0}</span>
                        </div>
                    ))}
                </div>
            <div className="mt-auto flex  justify-start">
            <DetailLinkButton
            href={keyboard?.github_url ?? keyboard?.website_url ?? undefined} target="_blank" rel="noopener noreferrer"
             >사이트 방문</DetailLinkButton>
            {/* <button >닫기</button> */}

            </div>
        </div>
        {/* // 하단에 자료들이 grid로 있음.
    // footer 부분에는 강조된 링크 버튼이 존재함. */}


    </div>)
}

const DetailCardImage = styled.img`
    width: 100%;
    height : 50%;
    aspect-ratio: ${theme.layout.imageRatio};
    background: ${theme.colors.tag};
        object-fit:contain;
`
const DetailLinkButton = styled.a`
    ${theme.style.bodySm};
    color: white;
    background: ${theme.colors.accent};
    padding: 10px 24px;
    border-radius: 8px;

    
`
const DetailCardDialog = styled.dialog`
    margin: auto;
  position: fixed;
  inset: 0;
`