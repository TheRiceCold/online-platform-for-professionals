import {TriangleDownIcon, TriangleUpIcon} from "@chakra-ui/icons"
import {Th, Tr, Thead as ChakraThead} from "@chakra-ui/react"

const Thead = ({table, isSort}) => (
  <ChakraThead 
    h={10}
    boxShadow="base" 
  >
    {
      table.headerGroups.map((hGroup, i) => {
        const hGroupProps = hGroup.getHeaderGroupProps()
        return (
          <Tr key={i} {...hGroupProps}>
            {
              hGroup.headers.map((col, j) => {
                const sortToggle = col.getSortByToggleProps()
                const headerProps = col.getHeaderProps(sortToggle)
                const sortLabel = col.isSorted ? (col.isSortedDesc ? " ▲" : " ▼") : ""

                return (
                  <Th 
                    key={i+j}
                    {...headerProps} 
                    textAlign="center"
                  >
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
