import { PageButton } from "@/components/PageButton";
import { keyboardColumns } from "@/data/columnOptions";
import useFilterParams from "@/hooks/useFilterParams";
import { useKeyboards } from "@/hooks/useKeyboard"
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import TableRow from "./components/TableRow";
import TableRowInput from "./components/TableRowInput";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { updateKeyboard } from "@/api/mutation";
import { theme } from "@/tokens/theme";
import useAuth from "@/hooks/useAuth";


const TablePage = () => {
    const { activeFilters, setFilter } = useFilterParams();
    const { data } = useKeyboards({ filters: activeFilters });
    const [editingRowId, setEditingRowId] = useState<string | null>(null);
    const table = useReactTable({
        data: data?.keyboards ?? [],
        columns: keyboardColumns,
        getCoreRowModel: getCoreRowModel(),
    })
    const {signOut} = useAuth()

    useEffect(() => {
        setEditingRowId(null);
    }, [activeFilters]);

    return (<div className="flex flex-col mt-6 px-[50px] items-center">
        <div className="flex self-start gap-3">
        <StyledButton>추가</StyledButton>
        <StyledButton onClick={signOut}>로그아웃</StyledButton>
        </div>
        <StyledTable className="text-accent border-collapse mt-5 ">
            <colgroup>
                <col style={{ width: '150px' }} />
                <col style={{ width: '190px' }} />
                <col style={{ width: '80px' }} />
                <col style={{ width: '80px' }} />
                <col style={{ width: '500px' }} />
                <col style={{ width: '150px' }} />
                <col style={{ width: '150px' }} />
                <col style={{ width: '150px' }} />
                <col style={{ width: '80px' }} />
                {/* ... */}
            </colgroup>
            <thead>
                {table.getHeaderGroups().map(headerGroup => (
                    <tr key={headerGroup.id}>
                        {headerGroup.headers.map(header => (
                            <th key={header.id} className="border-border border">
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
                            onSave={async (data1) => {
                                const { error } = await updateKeyboard(row.original.id, data1)
                                if (error) {
                                    console.error('업데이트 실패:', error.message)
                                    return
                                }
                                
                            }}
                        /> :
                        <TableRow
                            keyboard={row.original}
                            onClick={() => setEditingRowId(row.id)}
                        />
                ))}
            </tbody>
        </StyledTable>
        <PageButton totalPage={data?.totalPages ?? 0} />
    </div>
    )
}

export default TablePage

const StyledTable = styled.table`
    table-layout: fixed;
    width: 1163px;
`
const StyledButton = styled.button`
background-color: ${theme.colors.card};
border: 1px solid ${theme.colors.border};
padding: 5px;
border-radius: 10px;
color: ${theme.colors.text.main};
    &:hover {
        background-color: ${theme.colors.accent}
    }
`
