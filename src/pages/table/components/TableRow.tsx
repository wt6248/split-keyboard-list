import { theme } from "@/tokens/theme";
import type { KeyboardRow } from "@/types/keyboard"
// import styled from "node_modules/@emotion/styled/dist/declarations/src"
import styled from "@emotion/styled";

interface StyledTableRowProps {
    keyboard :KeyboardRow
    onClick: ()=> void
}

const TableRow = ({keyboard, onClick} : StyledTableRowProps) => {
    return (
        <StyledTableRow onClick={onClick}>
                <StyledCell>{keyboard.name}</StyledCell>
                <StyledCell>{keyboard.layout}</StyledCell>
                <StyledCell>{keyboard.matrix_cols}</StyledCell>
                <StyledCell>{keyboard.matrix_rows}</StyledCell>
                <StyledCell>{keyboard.description}</StyledCell>
        </StyledTableRow>
    )
}


const StyledTableRow = styled.tr`
    background-color: ${theme.colors.card};
    border: 1px solid ${theme.colors.border};
    &:hover {
        outline: 1px solid ${theme.colors.accent};
        outline-offset: -1px;
  }
`
const StyledCell = styled.td`
    ${theme.style.headingSm};
    padding: 10px 20px;
    color: ${theme.colors.text.main};
`
export default TableRow