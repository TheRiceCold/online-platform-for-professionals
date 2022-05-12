import Thead from "./Thead"
import Tbody from "./Tbody"
import {useMemo} from "react"
import {
  useTable, useSortBy, 
  useGlobalFilter, usePagination
} from "react-table"
import TableSearch from "./TableSearch"
import PaginateSize from "./PaginateSize"
import PaginateButtons from "./PaginateButtons"
import {
  Flex, Tfoot, 
  Table as ChakraTable
} from '@chakra-ui/react'

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
      <Flex 
        alignItems="center"
        justifyContent="space-between" 
      >
        {isSearch && 
          <TableSearch
            filter={globalFilter}
            label={isSearch && searchLabel}
            setFilter={table.setGlobalFilter}
          />
        }
        {isPaginated && 
          <PaginateSize table={table} />
        }
      </Flex>
      <ChakraTable 
        {...table.getTableProps}
        size={props.size || "sm"}
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
