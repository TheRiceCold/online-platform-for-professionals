import {Th, Tr, Thead as ChakraThead} from "@chakra-ui/react"

const Thead = ({table}) => (
  <ChakraThead>
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
                    <span>{sortLabel}</span>
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
