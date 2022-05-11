import Thead from "./Thead"
import Tbody from "./Tbody"
import {useMemo} from "react"
import TableSearch from "./TableSearch"
import {Tfoot, Table as ChakraTable} from '@chakra-ui/react'
import {useTable, useSortBy, useGlobalFilter} from "react-table"

const Table = props => {
  const {isSearch, isSort} = props
  const data = useMemo(() => props.data, [])
  const columns = useMemo(() => props.columns, [])
  const table = useTable({columns, data}, useGlobalFilter, useSortBy)
  const {globalFilter} = table.state

  return (
    <>
      {isSearch && 
        <TableSearch
          filter={globalFilter}
          setFilter={table.setGlobalFilter}
        />
      }
      <ChakraTable {...table.getTableProps}>
        <Thead table={table}/>
        <Tbody table={table} isSort={isSort}/>
      </ChakraTable>
    </>
  )
}

export default Table
