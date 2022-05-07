import {
  Flex, Input, InputGroup, Button,
  InputLeftElement, InputRightElement
  } from "@chakra-ui/react"
import {SearchIcon} from "@chakra-ui/icons"

const SearchInput = () => {
  return (
    <Flex align="center">
      <InputGroup>
        <Input placeholder="Search"/>
        <Input placeholder="Location"/>
        <Button>
          <SearchIcon />
        </Button>
      </InputGroup>
    </Flex>
  )
}

export default SearchInput
