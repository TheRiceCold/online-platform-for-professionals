import {Flex, Text, Select} from "@chakra-ui/react"

const PaginateSize = ({table}) => {
  const {setPageSize, state: {pageSize}} = table

  return (
  <Flex alignItems="center" mr={8}>
    <Text fontWeight={500}>Show</Text>
    <Select 
      m="0 8px"
      w="50pt"
      size="sm"
      borderRadius={5}
      onChange={e => setPageSize(Number(e.target.value))}
    > {
      [10, 15, 25, 50].map(size => (
        <option key={size} value={size}>
          {size}
        </option>
      ))
    }
    </Select>
    <Text fontWeight={500}>entries</Text>
  </Flex>
  )
}

export default PaginateSize
