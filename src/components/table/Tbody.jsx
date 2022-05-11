import {Tr, Td, Tbody as ChakraTbody} from '@chakra-ui/react'

const Tbody = ({table}) => {
  const {rows, prepareRow, getTableBodyProps} = table

  return (
    <ChakraTbody {...getTableBodyProps()}>
      {
        rows.map(row => {
          prepareRow(row)
          const rowProps = row.getRowProps()
          return ( 
            <Tr {...rowProps}>
              {
                row.cells.map(cell => {
                  const cellProps = cell.getCellProps()
                  const cellRender = cell.render("Cell")
                  return ( 
                    <Td {...cellProps} textAlign="center">
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
