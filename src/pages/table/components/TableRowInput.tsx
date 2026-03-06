
import { columnOption } from "@/data/columnOptions";
import { theme } from "@/tokens/theme";
import type { KeyboardRow } from "@/types/keyboard"
// import styled from "node_modules/@emotion/styled/dist/declarations/src"
import styled from "@emotion/styled";
import { useState } from "react";

interface StyledTableRowProps {
    keyboard?: KeyboardRow
    onSave: (data: Partial<KeyboardRow>) => void;
}

const TableRowInput = ({ keyboard, onSave }: StyledTableRowProps) => {
    const [form, setForm] = useState<Partial<KeyboardRow>>({
        name: keyboard?.name ?? "",
        layout: keyboard?.layout,
        matrix_cols: keyboard?.matrix_cols ?? 0,
        matrix_rows: keyboard?.matrix_rows ?? 0,
        description: keyboard?.description ?? "",
        pointing_device: keyboard?.pointing_device ?? "none",
        encoder: keyboard?.encoder ?? "none",
        connectivity: keyboard?.connectivity ?? "unknown",
    });

    const onChange = (key: string, value: string | number) => {
        setForm((prev) => ({ ...prev, [key]: value }))
    }


    return (
        <StyledTableRow>
            {columnOption.map((label) => (
                <StyledCell>
                    {
                        label.inputType === "select"
                            ?
                            <StyledSelect
                                value={form[label.value] ?? ""}
                                onChange={(e) => onChange(label.value, e.target.value)}
                            >
                                <option value="">선택</option>
                                {label.options.map((opt) => (
                                    <option key={opt} value={opt}>{opt}</option>
                                ))}
                            </StyledSelect>
                            :
                            <StyledInput
                                type={label.inputType}
                                value={form[label.value] ?? ""}
                                onChange={(e) => onChange(
                                    label.value,
                                    label.inputType === "number" ? Number(e.target.value) : e.target.value)}
                            />
                    }

                </StyledCell>
            ))}
            <StyledCell>
                <StyledButton onClick={() => onSave(form)}>저장</StyledButton>
            </StyledCell>
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
    ${theme.style.bodySm};
    padding: 10px 20px;
    color: ${theme.colors.text.main};
`
const StyledButton = styled.button`
    &:hover {
        background-color: ${theme.colors.accent}
    }
`

const StyledInput = styled.input`
    background-color: ${theme.colors.background};
    width: 100%;
    box-sizing : border-box;
    border: 1px solid ${theme.colors.border};
`

const StyledSelect = styled.select`
    background-color: ${theme.colors.background};
    width: 100%;
    box-sizing: border-box;
    border: 1px solid ${theme.colors.border};
`
export default TableRowInput