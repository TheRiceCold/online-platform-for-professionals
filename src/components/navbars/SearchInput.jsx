import {
  Button, Flex,
  Input, InputGroup, 
  InputRightElement
} from "@chakra-ui/react"
import {SearchIcon} from "@chakra-ui/icons"

const SearchInput = () => {
  return (
    <Flex align="center">
      <InputGroup>
        <Input 
          borderRightRadius={0}
          placeholder="Search"
        />
        <Input 
          borderLeftRadius={0}
          placeholder="Location"
        />
        <InputRightElement>
          <Button bg="none">
            <SearchIcon />
          </Button>
        </InputRightElement>
      </InputGroup>
    </Flex>
  )
}

export default SearchInput
