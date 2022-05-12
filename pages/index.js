import Head from "next/head"
import {useUser} from "@/context/UserContext"
import HomeLayout from "@/layouts/HomeLayout"
import {Box, Flex, Image} from "@chakra-ui/react"

const Home = () => {
  const {user} = useUser()
  const title = user ? "Home" : "Sign in"
  const links = ["Link", "Link", "Links", "Link"]

  return (
    <main>
      <Head>
        <title>{title}</title>
      </Head> 
      <Flex 
        as="header" 
        alignItems="center" 
        justifyContent="space-around"
        py={4}
      >
        <Box as="nav" h={10} >
          <Image 
            mr={8}
            height="32px" alt="logo"
            src="/workflow_logo.svg" 
          />
        </Box>
      </Flex>
      <HomeLayout/>
    </main>
  )
}

export default Home
