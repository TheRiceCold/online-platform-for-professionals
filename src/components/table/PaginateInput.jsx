import {Box, Input} from '@chakra-ui/react'

const PaginateInput = ({table}) => {
  const {
    state: {pageIndex},
    gotoPage, pageCount
  } = table

  return (
    <Box w={150} d="inline" fontWeight="bold">
      Page{" "}
      <Input 
        w={35}
        size={2}
        maxlength={2}
        type="number"
        borderRadius={5}
        fontWeight="bold"
        textAlign="center"
        defaultValue={pageIndex+1}
        onChange={e => {
          const pageNo = e.target.value ? Number(e.target.value) - 1 : 0
          gotoPage(pageNo)
        }}
      />{" "}
      <strong>of {pageCount}</strong>{" "}
    </Box>
  )
}

export default PaginateInput
