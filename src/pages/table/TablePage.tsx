import { useKeyboards } from "@/hooks/useKeyboard"
import { type KeyboardRow } from "@/types/keyboard";
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'

const TablePage = () => {
    const keyboards = useKeyboards({}).data?.keyboards ?? []
    const columnHelper = createColumnHelper<KeyboardRow>();

    const keyboardColumns = [
        columnHelper.accessor("image_url", {
            header: "Image",
            cell: (info) =>
                info.getValue() ? (
                    <img src={info.getValue() ?? undefined} width={50} />
                ) : (
                    "No Image"
                ),
        }),
        columnHelper.accessor("name", {
            header: "Name",
            cell: (info) => info.getValue(),
        }),
        columnHelper.accessor("id", {
            header: "ID",
            cell: (info) => info.getValue(),
        }),
        columnHelper.accessor("release_ym", {
            header: "Release YM",
            cell: (info) => info.getValue(),
        }),
        columnHelper.accessor("designer", {
            header: "Designer",
            cell: (info) => info.getValue(),
        }),
        columnHelper.accessor("description", {
            header: "Description",
            cell: (info) => info.getValue(),
        }),
        columnHelper.accessor("github_url", {
            header: "Github",
            cell: (info) => info.getValue(),
        }),
        columnHelper.accessor("website_url", {
            header: "Website",
            cell: (info) => info.getValue(),
        }),
        columnHelper.accessor("github_stars", {
            header: "Stars",
            cell: (info) => info.getValue(),
        }),
        columnHelper.accessor("layout", {
            header: "Layout",
            cell: (info) => info.getValue(),
        }),
        columnHelper.accessor("pointing_device", {
            header: "Pointing Devices",
            cell: (info) => info.getValue(),
        }),
        columnHelper.accessor("encoder", {
            header: "Encoder",
            cell: (info) => info.getValue(),
        }),
        columnHelper.accessor("connectivity", {
            header: "Connectivity",
            cell: (info) => info.getValue(),
        }),
        columnHelper.accessor("matrix_cols", {
            header: "cols",
            cell: (info) => info.getValue(),
        }),
        columnHelper.accessor("matrix_rows", {
            header: "rows",
            cell: (info) => info.getValue(),
        }),
    ]

    const table = useReactTable({
        data: keyboards,
        columns: keyboardColumns,
        getCoreRowModel: getCoreRowModel(),
    })

    return (
        <table className="text-accent border-collapse">
             <thead>
            {table.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id}>
                    {headerGroup.headers.map(header => (
                        <th key={header.id} className="border-white border">
                            {flexRender(header.column.columnDef.header, header.getContext())}
                        </th>
                    ))}
                </tr>
            ))}
        </thead>
        <tbody>
            {table.getRowModel().rows.map(row => (
                <tr key={row.id}>
                    {row.getVisibleCells().map(cell => (
                        <td key={cell.id} className="border-white border">
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
        </table>
    )
}

export default TablePage