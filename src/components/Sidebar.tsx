import styled from "@emotion/styled"
import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"

export const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    return (
        <>
            <ToggleButton 
                initial={{x: 0}}
                animate ={{x: '280px'}}
                exit={{x: 0}}
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
                {isSidebarOpen ? '✕' : '☰'}

            </ToggleButton>
            <AnimatePresence>
                {isSidebarOpen ? (
                    <>
                        <Overlay
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsSidebarOpen(false)}
                        />
                        <SidebarContainer
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: 'tween', duration: 0.3 }}
                        >
                            무언가를 넣어주세요.
                        </SidebarContainer>
                    </>
                )
                    : null}
            </AnimatePresence>


        </>
    )
}

const ToggleButton = styled(motion.button)`
    background : white;
    border-radius: 100%;
    position: fixed;
    top : 20px;
    left : 20px;
    width: 50px;
    height: 50px;
    z-index: 20;
`
const Overlay = styled(motion.div)`
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.4);
    z-index: 5;
`
const SidebarContainer = styled(motion.aside)`
    position: fixed;
    top: 0;
    left: 0;
    width: 280px;
    height: 100vh;
    background: white;
    z-index: 50;
`