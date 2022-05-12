import Thead from "./Thead"
import Tbody from "./Tbody"
import {useMemo} from "react"
import {
  useGlobalFilter, usePagination,
  useTable, useSortBy, useRowSelect
} from "react-table"
import Checkbox from "./Checkbox"
import TableSearch from "./TableSearch"
import PaginateSize from "./PaginateSize"
import PaginateButtons from "./PaginateButtons"
import {Flex, Table as ChakraTable} from '@chakra-ui/react'

const Table = props => {
  const data = useMemo(() => props.data, [])
  const columns = useMemo(() => props.columns, [])
  const {
    searchLabel,
    stripeColor,
    isSearch, isSort, 
    isPaginated, isStriped
  } = props
  const table = useTable(
    {columns, data}, 
    useGlobalFilter, 
    useSortBy, 
    usePagination,
    useRowSelect,
    hooks => {
      hooks.visibleColumns.push(col => [
        {
          id: "selection",
          Header: prop => (
            <Checkbox {...prop.getToggleAllRowsSelectedProps()} />
          ),
          Cell: ({row}) => (
            <Checkbox {...row.getToggleRowSelectedProps()} />
          )
        }, ...col,
      ])
    }
  )
  const {selectedFlatRows, state: {globalFilter}} = table

  return (
    <>
      <Flex 
        mb={4}
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
        {isPaginated && <PaginateSize table={table}/>}
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
      <pre>
        <code>
          {JSON.stringify({
            selectedFlatRows: selectedFlatRows.map(row => row.original)
          }, null, 2)}
        </code>
      </pre>
    </>
  )
}

export default Table
