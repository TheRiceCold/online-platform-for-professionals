import styles from "@/styles/Home.module.sass"

import {
  Text, Heading,
  Flex, Stack, Container,
} from '@chakra-ui/react'
import Navbar from "../navbar/Navbar"
import Button from "@/components/Button"

function HomeLayout() {
  const navLinks = [
    { 
      type: "button",
      label: "Login", 
      href: "/login"
    },
    { 
      type: "button",
      label: "Sign up", 
      href: "/signup"
    },
  ]
  return (
    <>
      <Navbar styles={styles} links={navLinks}/>
      <Container maxW={'5xl'}>
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Meeting scheduling{' '}
            <Text as={'span'} color={'orange.400'}>
              made easy
            </Text>
          </Heading>
          <Text color={'gray.500'} maxW={'3xl'}>
            Never miss a meeting. Never be late for one too. Keep track of your
            meetings and receive smart reminders in appropriate times. Read your
            smart “Daily Agenda” every morning.
          </Text>
          <Stack spacing={6} direction={'row'}>
            <Button variant="primary">
              Get started
            </Button>
            <Button rounded={'full'} px={6}>
              Learn more
            </Button>
          </Stack>
          <Flex w={'full'}>
          </Flex>
        </Stack>
      </Container>
    </>
  )
}

export default HomeLayout
