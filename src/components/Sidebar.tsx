import styled from "@emotion/styled"
import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"
import { theme } from "@/tokens/theme"
import { filterCategories } from "@/data/sidebarOptions"
import useFilterParams from "@/hooks/useFilterParams"

export const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const {activeFilters, toggle } = useFilterParams()
    console.log(activeFilters)
    return (
        <>
            <ToggleButton
                initial={{ x: 0 }}
                animate={{ x: isSidebarOpen ? '280px' : 0 }}
                exit={{ x: 0 }}
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
                            <fieldset
                                className=" flex flex-col gap-5 p-[32px]"
                            >
                                {filterCategories.map((category) => (
                                    <div key={category.key}>
                                        <legend>{category.label}</legend>
                                        <div className={category.key === "type" ? "flex flex-col" : "flex flex-row flex-wrap gap-2"}>
                                            {category.options.map((option) => (
                                                <label key={option.value}>
                                                    <StyledCheckbox 
                                                    type="checkbox"
                                                    checked={ activeFilters[category.key]?.includes(option.value) ?? false}
                                                    onClick={() => toggle(category.key, option.value)}/>
                                                    {option.label}
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </fieldset>
                        </SidebarContainer>
                    </>
                )
                    : null}
            </AnimatePresence>


        </>
    )
}

const ToggleButton = styled(motion.button)`
    background : ${theme.colors.card};
    border-radius: 0 50% 50% 0;
    position: fixed;
    top : 80px;
    width: 50px;
    height: 50px;
    z-index: 50;
    color: ${theme.colors.text.main};
    border: 1px solid ${theme.colors.border};
`
const Overlay = styled(motion.div)`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 5;
`
const SidebarContainer = styled(motion.aside)`
    position: fixed;
    top: 0;
    left: 0;
    width: 280px;
    height: 100vh;
    background: ${theme.colors.card};
    z-index: 40;
    color: ${theme.colors.text.main};
`
const StyledCheckbox = styled.input`
  appearance: none;
  width: 14px;
  height: 14px;
  border-radius: 2px;
  border: 1px solid ${theme.colors.border};
  background-color: ${theme.colors.background};
  cursor: pointer;
  flex-shrink: 0;

  &:checked {
    background-color: ${theme.colors.accent};
    border-color: ${theme.colors.accent};
  }
`;