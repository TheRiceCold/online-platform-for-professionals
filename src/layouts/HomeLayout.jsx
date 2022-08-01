import { useRouter } from "next/router";
import { Button } from "~/components";
import {
  Text, Heading,
  Flex, Stack, 
  Container,
} from "@chakra-ui/react";

function HomeLayout() {
  const router = useRouter();

  return (
    <Container maxW="5xl">
      <Stack
        textAlign="center"
        align="center"
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}
        >
          Online Platform for{' '}
          <Text as={'span'} color={'teal.400'}>
            Professionals
          </Text>
        </Heading>
        <Text color={'gray.500'} maxW={'3xl'}>
          Never miss a meeting. Never be late for one too. Keep track of your
          meetings and receive smart reminders in appropriate times. Read your
          smart “Daily Agenda” every morning.
        </Text>
        <Button 
          variant="primary"
          onClick={() => router.push("login")}
        >
          Get started
        </Button>
        <Flex w={'full'}>
        </Flex>
      </Stack>
    </Container>
  );
}

export default HomeLayout;
