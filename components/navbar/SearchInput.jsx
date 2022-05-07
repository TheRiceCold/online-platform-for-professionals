import {
  Flex, Input, InputGroup, Button,
  InputLeftElement, InputRightElement
  } from "@chakra-ui/react"
import {CgSearch} from "react-icons/cg"

const SearchInput = () => {
  return (
    <Flex align="center">
      <InputGroup>
        <Input placeholder="Search"/>
        <Input placeholder="Location"/>
        <Button>
          <CgSearch size={48}/>
        </Button>
      </InputGroup>
    </Flex>
  )
}

export default SearchInput
