import {
  Avatar, Flex, 
  Box, Text, Link
} from "@chakra-ui/react"
import {useUser} from "@/context/UserContext"
import Navbar from "@/components/navbars/Navbar"

const ProfessionalLayout = () => {
  const {user} = useUser()
  const navbarLinks = ["Home", "Portfolio", "Services", "Connections", "Messages", "Reviews"]

  return (
    <>
      <Navbar links={navbarLinks}/>
      <Flex direction="column" width="100%" height="300px">
        <Box height="50%" bg="gray.400"/>
        <Flex justify="center" flexGrow={1}>
          <Flex w="95%">
            <Avatar 
              size="2xl" 
              top={-3}
              position="relative"
              borderRadius="full"
              border="6px solid white"
              src="https://avatars.dicebear.com/api/male/username.svg" 
            />
            <Flex padding="10px 16px">
              <Flex direction="column" mr={6}>
                <Text fontWeight={700} fontSize="26px">
                  {user?.fullname}
                </Text>
                <Text fontSize="16px">
                  {user?.field}
                </Text>
                <Text fontSize="14px" color="gray.600">
                  {user?.city}, {user?.region}, Philippines - {" "}
                  <Link color="blue.500" fontWeight={500}>
                    Contact Info
                  </Link>
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}

export default ProfessionalLayout
