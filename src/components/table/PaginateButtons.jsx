import PaginateInput from "./PaginateInput"
import {Flex, Button} from "@chakra-ui/react"

const PaginateButtons = ({table}) => {
  const {
    gotoPage, pageCount,
    nextPage, previousPage,
    canNextPage, canPreviousPage
  } = table

  const goto = to => {
    switch (to) {
      case "first": 
        gotoPage(0)
      break
      case "last": 
        gotoPage(pageCount + 1)
      break
    }
  }

  return (
    <Flex mt={4} justifyContent="center">
      <PaginateInput table={table}/>
      <Button 
        ml={4}
        size="sm"
        disabled={!canPreviousPage}
        onClick={() => goto("first")}
      >
        {"<<"}
      </Button>
      <Button 
        ml={2}
        size="sm"
        onClick={previousPage}
        disabled={!canPreviousPage}
      >
        Previous
      </Button>
      <Button 
        ml={2}
        size="sm"
        onClick={nextPage}
        disabled={!canNextPage}
      >
        Next
      </Button>
      <Button 
        ml={2}
        size="sm"
        disabled={!canNextPage}
        onClick={() => goto("last")}
      >
        {">>"}
      </Button>
    </Flex>
  )
}

export default PaginateButtons
