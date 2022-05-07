import {Flex} from "@chakra-ui/react"
import SearchInput from "./SearchInput"
import AuthButtons from "./AuthButtons"
import UserMenu from "./UserMenu"

const Navbar = () => {
  return (
    <Flex bg="white" height="44px" padding="6px 12px">
      <Flex align="center">
        
      </Flex>
      <SearchInput/>
      <AuthButtons/>
      <UserMenu/>
    </Flex>
  )
}

export default Navbar
