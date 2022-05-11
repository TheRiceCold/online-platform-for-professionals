import Thead from "./Thead"
import Tbody from "./Tbody"
import {useMemo} from "react"
import {useTable, useSortBy} from "react-table"
import {Tfoot, Table as ChakraTable} from '@chakra-ui/react'

const Table = props => {
  const data = useMemo(() => props.data, [])
  const columns = useMemo(() => props.columns, [])
  const table = useTable({columns, data}, useSortBy)

  return (
    <ChakraTable {...table.getTableProps}>
      <Thead table={table}/>
      <Tbody table={table}/>
    </ChakraTable>
  )
}

export default Table
