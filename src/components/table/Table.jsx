import Thead from "./Thead"
import Tbody from "./Tbody"
import {useMemo} from "react"
import {
  useTable, useSortBy, 
  useGlobalFilter, usePagination
} from "react-table"
import TableSearch from "./TableSearch"
import PaginateButtons from "./PaginateButtons"
import {Tfoot, Table as ChakraTable} from '@chakra-ui/react'

const Table = props => {
  const data = useMemo(() => props.data, [])
  const columns = useMemo(() => props.columns, [])
  const {
    searchLabel,
    stripeColor,
    isSearch, isSort, 
    isPaginated, isStriped
  } = props
  const table = useTable({columns, data}, useGlobalFilter, useSortBy, usePagination)
  const {globalFilter} = table.state

  return (
    <>
      {isSearch && 
        <TableSearch
          filter={globalFilter}
          label={isSearch && searchLabel}
          setFilter={table.setGlobalFilter}
        />
      }
      <ChakraTable 
        {...table.getTableProps}
        colorScheme={stripeColor}
        variant={isStriped && "striped"}
      >
        <Thead table={table}/>
        <Tbody 
          table={table} 
          isSort={isSort}
          isPaginated={isPaginated}
        />
      </ChakraTable>
      {isPaginated && 
        <PaginateButtons table={table}/>
      }
    </>
  )
}

export default Table
