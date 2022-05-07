import {Flex} from "@chakra-ui/react"
import SearchInput from "./SearchInput"
import AuthButtons from "./AuthButtons"

const Navbar = () => {
  return (
    <Flex bg="white" height="44px" padding="6px 12px">
      <Flex align="center">
        
      </Flex>
      <SearchInput/>
      <AuthButtons/>
    </Flex>
  )
}

export default Navbar
