import { ENCODER_SUPPORTS, KEYBOARD_CONNECTIVITIES, KEYBOARD_LAYOUTS, POINTING_DEVICES, type KeyboardRow } from "@/types/keyboard";
import { createColumnHelper } from "@tanstack/react-table";

const columnHelper = createColumnHelper<KeyboardRow>();

export const columnOption = [
    // { label: "Image", value: "image_url" },
    { label: "NAME", value: "name", inputType: "text" },
    { label: "LAYOUT", value: "layout", inputType: "select", options: KEYBOARD_LAYOUTS }, // 실제 enum 값으로 교체},
    { label: "COLS", value: "matrix_cols", inputType: "number" },
    { label: "ROWS", value: "matrix_rows", inputType: "number" },
    { label: "DESCRIPTION", value: "description", inputType: "text" },
    { label: "POINTER", value: "pointing_device", inputType: "select", options: POINTING_DEVICES },
    { label: "ENCODER", value: "encoder", inputType: "select", options: ENCODER_SUPPORTS },
    { label: "CONNECTIVITY", value: "connectivity", inputType: "select", options: KEYBOARD_CONNECTIVITIES },
    
] as const 

export const keyboardColumns = columnOption.map((item) => {
    return columnHelper.accessor(item.value, {
        header: item.label,
        cell: (info) => info.getValue(),
    })
})