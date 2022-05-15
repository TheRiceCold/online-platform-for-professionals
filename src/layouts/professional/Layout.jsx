import {
  Flex, 
  Box, 
  Text, 
  Link,
  Avatar, 
  Skeleton, 
  SkeletonText,
  SkeletonCircle,
} from "@chakra-ui/react"
import Navbar from "@/components/navbars/Navbar"

const ProfessionalLayout = () => {
  const navbarLinks = ["Portfolio", "Services", "Connections", "Messages"]

  return (
    <>
      <Navbar links={navbarLinks}/>
      <Flex direction="column" width="100%" height="300px">
        <Box height="50%" bg="gray.400"/>
        <Flex justify="center" flexGrow={1}>
          <Flex w="95%">
            <SkeletonCircle size="116px"/>
            {/* <Avatar  */}
            {/*   size="2xl"  */}
            {/*   top={-3} */}
            {/*   position="relative" */}
            {/*   borderRadius="full" */}
            {/*   border="6px solid white" */}
            {/*   src="https://avatars.dicebear.com/api/male/username.svg"  */}
            {/* /> */}
            <Flex padding="10px 16px">
              <Flex direction="column" mr={6}>
                <Skeleton h="30px" mb={2}>
                  <Text fontWeight={700} fontSize="26px">
                    first name last name
                  </Text>
                </Skeleton>
                <Skeleton h="20px" mb={2}>
                  <Text fontSize="16px">
                    Programmer
                  </Text>
                </Skeleton>
                <Skeleton h="18px">
                  <Text fontSize="14px" color="gray.600">
                    <Link color="blue.500" fontWeight={500}>
                      Contact Info
                    </Link>
                  </Text>
                </Skeleton>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}

export default ProfessionalLayout
