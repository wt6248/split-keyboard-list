import type { KeyboardRow } from "@/types/keyboard";
import { createColumnHelper } from "@tanstack/react-table";

const columnHelper = createColumnHelper<KeyboardRow>();

export const columnOption = [
    // { label: "Image", value: "image_url" },
    { label: "NAME", value: "name" },
    { label: "LAYOUT", value: "layout" },
    { label: "COLS", value: "matrix_cols" },
    { label: "ROWS", value: "matrix_rows" },
    { label: "DESCRIPTION", value: "description" },
] as const 

export const keyboardColumns = columnOption.map((item) => {
    return columnHelper.accessor(item.value, {
        header: item.value,
        cell: (info) => info.getValue(),
    })
})
// export const keyboardColumns = [
//     columnHelper.accessor("image_url", {
//         header: "Image",
//         cell: (info) =>
//             info.getValue() ?? "No Image",
//     }),
//     columnHelper.accessor("name", {
//         header: "Name",
//         cell: (info) => info.getValue(),
//     }),
//     columnHelper.accessor("id", {
//         header: "ID",
//         cell: (info) => info.getValue(),
//     }),
//     columnHelper.accessor("release_ym", {
//         header: "Release YM",
//         cell: (info) => info.getValue(),
//     }),
//     columnHelper.accessor("designer", {
//         header: "Designer",
//         cell: (info) => info.getValue(),
//     }),
//     columnHelper.accessor("description", {
//         header: "Description",
//         cell: (info) => info.getValue(),
//     }),
//     columnHelper.accessor("github_url", {
//         header: "Github",
//         cell: (info) => info.getValue(),
//     }),
//     columnHelper.accessor("website_url", {
//         header: "Website",
//         cell: (info) => info.getValue(),
//     }),
//     columnHelper.accessor("github_stars", {
//         header: "Stars",
//         cell: (info) => info.getValue(),
//     }),
//     columnHelper.accessor("layout", {
//         header: "Layout",
//         cell: (info) => info.getValue(),
//     }),
//     columnHelper.accessor("pointing_device", {
//         header: "Pointing Devices",
//         cell: (info) => info.getValue(),
//     }),
//     columnHelper.accessor("encoder", {
//         header: "Encoder",
//         cell: (info) => info.getValue(),
//     }),
//     columnHelper.accessor("connectivity", {
//         header: "Connectivity",
//         cell: (info) => info.getValue(),
//     }),
//     columnHelper.accessor("matrix_cols", {
//         header: "cols",
//         cell: (info) => info.getValue(),
//     }),
//     columnHelper.accessor("matrix_rows", {
//         header: "rows",
//         cell: (info) => info.getValue(),
//     }),
// ]