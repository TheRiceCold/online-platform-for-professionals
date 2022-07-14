import {Tr, Td, Tbody as ChakraTbody} from '@chakra-ui/react'

const Tbody = ({table, isPaginated}) => {
  const {page, prepareRow, getTableBodyProps} = table
  const rows = isPaginated ? page : table.rows

  return (
    <ChakraTbody {...getTableBodyProps()}>
      {
        rows.map((row, i) => {
          prepareRow(row)
          const rowProps = row.getRowProps()
          return ( 
            <Tr key={i} {...rowProps}>
              {
                row.cells.map((cell, j) => {
                  const cellProps = cell.getCellProps()
                  const cellRender = cell.render("Cell")
                  return ( 
                    <Td key={i+j}{...cellProps} textAlign="center">
                      {cellRender}
                    </Td> 
                  )
                })
              } 
            </Tr>
          )
        })
      }
    </ChakraTbody>
  )
}

export default Tbody
