import {TriangleDownIcon, TriangleUpIcon} from "@chakra-ui/icons"
import {Th, Tr, Thead as ChakraThead} from "@chakra-ui/react"

const Thead = ({table, isSort}) => (
  <ChakraThead 
    h={10}
    boxShadow="base" 
  >
    {
      table.headerGroups.map(hGroup => {
        const hGroupProps = hGroup.getHeaderGroupProps()
        return (
          <Tr {...hGroupProps}>
            {
              hGroup.headers.map(col => {
                const sortToggle = col.getSortByToggleProps()
                const headerProps = col.getHeaderProps(sortToggle)
                const sortLabel = col.isSorted ? (col.isSortedDesc ? " ▲" : " ▼") : ""

                return (
                  <Th {...headerProps} textAlign="center">
                    {col.render("Header")}
                    {isSort && <span>{sortLabel}</span>}
                  </Th>
                )
              })
            }
        </Tr>
        )
      })
    }
  </ChakraThead>
)

export default Thead
