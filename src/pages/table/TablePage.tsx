import { PageButton } from "@/components/PageButton";
import { keyboardColumns } from "@/data/columnOptions";
import useFilterParams from "@/hooks/useFilterParams";
import { useKeyboards } from "@/hooks/useKeyboard"
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import TableRow from "./components/TableRow";
import TableRowInput from "./components/TableRowInput";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";


const TablePage = () => {
    const { activeFilters, setFilter } = useFilterParams();
    const { data } = useKeyboards({ filters: activeFilters });
    const [editingRowId, setEditingRowId] = useState<string | null>(null);
    const table = useReactTable({
        data: data?.keyboards ?? [],
        columns: keyboardColumns,
        getCoreRowModel: getCoreRowModel(),
    })

    useEffect(() => {
        setEditingRowId(null);
    }, [activeFilters]);

    return (<>
        <StyledTable className="text-accent border-collapse mt-5 ">
            <colgroup>
                <col style={{ width: '150px' }} />
                <col style={{ width: '190px' }} />
                <col style={{ width: '80px' }} />
                <col style={{ width: '80px' }} />
                <col style={{ width: '500px' }} />
                <col style={{ width: '80px' }} />
                {/* ... */}
            </colgroup>
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
                    row.id === editingRowId ?
                        <TableRowInput
                            keyboard={row.original}
                            onSave={(data) => { console.log(data) }}
                        /> :
                        <TableRow keyboard={row.original} onClick={() => setEditingRowId(row.id)} />

                ))}
                {/* {table.getRowModel().rows.map(row => (
                <TableRowInput
                 keyboard={row.original}
                 onSave={(data) => {console.log(data)}}/>
                 
            ))} */}
            </tbody>
        </StyledTable>
        <PageButton totalPage={data?.totalPages ?? 0} />
    </>
    )
}

export default TablePage

const StyledTable = styled.table`
    table-layout: fixed;
    width: 1163px;

`