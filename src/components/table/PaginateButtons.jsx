import PaginateInput from "./PaginateInput"
import {Box, Button} from "@chakra-ui/react"

const PaginateButtons = ({table}) => {
  const {
    gotoPage, pageCount,
    nextPage, previousPage,
    canNextPage, canPreviousPage
  } = table

  return (
    <Box>
      <PaginateInput table={table}/>
      <Button 
        ml={4}
        disabled={!canPreviousPage}
        onClick={() => gotoPage(0)}
      >
        {"<<"}
      </Button>
      <Button 
        ml={4}
        onClick={previousPage}
        disabled={!canPreviousPage}
      >
        Previous
      </Button>
      <Button 
        ml={4}
        onClick={nextPage}
        disabled={!canNextPage}
      >
        Next
      </Button>
      <Button 
        ml={4}
        disabled={!canNextPage}
        onClick={() => gotoPage(pageCount-1)}
      >
        {">>"}
      </Button>
    </Box>
  )
}

export default PaginateButtons
