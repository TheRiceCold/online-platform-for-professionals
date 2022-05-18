import {
  Avatar, 
  Box, Flex, 
  Text, Link,
  Skeleton, SkeletonCircle,
} from "@chakra-ui/react"
import Navbar from "@/components/navbars/Navbar"
import {capitalize} from "@/utils/stringHelpers"
import {useAppState} from "@/context/state/Context"

const ProfessionalLayout = () => {
  const {useAuth} = useAppState()
  const {user} = useAuth()

  const preLink = to => `professionals/${user.id}/${to}`

  const navbarLinks = [
    { 
      label: "Portfolio",
      href: preLink("portfolio"), 
    },
    { 
      label: "Services",
      href: "services", 
    }, 
    { href: "connections", label: "Connections" }, 
    { 
      href: "bookings", 
      label: "Bookings" 
    }
  ]

  const {city, region, firstName, lastName} = user.attributes
  const fullname = capitalize(`${firstName} ${lastName}`)
  const location = `${city}, ${region}, Philippines`

  return (
    <>
      <Navbar links={navbarLinks}/>
      <Flex direction="column" width="100%" height="300px">
        <Box height="50%" bg="gray.400"/>
        <Flex justify="center" flexGrow={1}>
          <Flex w="95%">
            {/* <SkeletonCircle size="116px"> */}
              <Avatar 
                size="2xl" 
                top={-3}
                position="relative"
                borderRadius="full"
                border="6px solid white"
                src="https://avatars.dicebear.com/api/male/username.svg" 
              />
            {/* </SkeletonCircle> */}
            <Flex padding="10px 16px">
              <Flex direction="column" mr={6}>
                <Skeleton h="30px" mb={2} isLoaded={fullname}>
                  <Text fontWeight={700} fontSize="26px">
                    {fullname}
                  </Text>
                </Skeleton>
                <Skeleton h="20px" mb={2}>
                  <Text fontSize="16px">
                    Programmer
                  </Text>
                </Skeleton>
                <Skeleton h="18px" isLoaded={location}>
                  <Text fontSize="14px" color="gray.600">
                    {location}{" "}
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
