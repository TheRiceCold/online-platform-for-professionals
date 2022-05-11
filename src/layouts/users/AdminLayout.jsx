import {useMemo} from "react"
import {
  Tr, Th, Td,
  Table, Thead,
  Tbody, Tfoot,
} from '@chakra-ui/react'
import {useTable} from "react-table"

const AdminLayout = () => {
  const COLUMNS = [
    {Header: "Id", accessor: "id"},
    {Header: "First Name", accessor: 'first_name'},
    {Header: "Last Name", accessor: 'last_name'},
    {Header: "Email", accessor: 'email'},
  ]

  const MOCK_DATA= []
  for (let i = 0; i < 5; i++) {
    MOCK_DATA.push({
      id: i+1,
      first_name: "john",
      last_name: "lloyd",
      field: "programmer",
      email: "johnlloyd@example.com"
    })
  }

  const data = useMemo(() => MOCK_DATA, [])
  const columns = useMemo(() => COLUMNS, [])

  const table = useTable({columns, data})

  const {
    headerGroups,
    getTableProps,
    rows, prepareRow,
    getTableBodyProps,
  } = table

  return (
    <Table {...getTableProps}>
      <Thead>
        {headerGroups.map(headerGroup => (
          <Tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(col => (
              <Th {...col.getHeaderProps()}>
                {col.render("Header")}
              </Th> 
            ))}
          </Tr>
        ))}
      </Thead>
      <Tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row)
            return ( 
              <Tr {...row.getRowProps()}>
                {row.cells.map(cell => ( 
                  <Td {...cell.getCellProps()}> 
                    {cell.render("Cell")}
                  </Td> 
                ))} 
              </Tr>
            )
        })}
      </Tbody>
    </Table>
  )
}

export default AdminLayout
