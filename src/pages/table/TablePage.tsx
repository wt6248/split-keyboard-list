import { PageButton } from "@/components/PageButton";
import { keyboardColumns } from "@/data/columnOptions";
import useFilterParams from "@/hooks/useFilterParams";
import { useKeyboards } from "@/hooks/useKeyboard"
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import TableRow from "./components/TableRow";
import TableRowInput from "./components/TableRowInput";

const TablePage = () => {  
    const { activeFilters, setFilter } = useFilterParams();
  const { data } = useKeyboards({ filters: activeFilters });
    // const keyboards = useKeyboards({}).data?.keyboards ?? []
    

    const table = useReactTable({
        data: data?.keyboards ?? [],
        columns: keyboardColumns,
        getCoreRowModel: getCoreRowModel(),
    })

    return (<>
        <table className="text-accent border-collapse mt-5 ">
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
                <TableRow keyboard={row.original}/>
                
            ))}
           {table.getRowModel().rows.map(row => (
                <TableRowInput
                 keyboard={row.original}
                 onSave={(data) => {console.log(data)}}/>
                 
            ))}
        </tbody>
        </table>
        <PageButton totalPage={data?.totalPages ?? 0}/>
        </>
    )
}

export default TablePage