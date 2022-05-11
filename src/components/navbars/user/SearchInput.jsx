import {
  Button, Flex,
  InputRightElement,
  Input, InputGroup, 
} from "@chakra-ui/react"
import {SearchIcon} from "@chakra-ui/icons"

const SearchInput = () => {
  return (
    <Flex align="center">
      <InputGroup>
        <Input 
          h={8}
          bg="gray.50"
          placeholder="Search" 
        />
        <InputRightElement h={8}>
          <Button bg="none" _hover={{bg: "none"}}>
            <SearchIcon boxSize={3}/>
          </Button>
        </InputRightElement>
      </InputGroup>
    </Flex>
  )
}

export default SearchInput
