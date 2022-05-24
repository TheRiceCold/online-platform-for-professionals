import styles from '@/styles/Home.module.sass';

import { Text, Heading, Flex, Stack, Container } from '@chakra-ui/react';
import Navbar from '../navbar/Navbar';
import Button from '@/components/Button';

import { useRouter } from 'next/router';

function HomeLayout() {
	const router = useRouter();

	const navLinks = [
		{
			type: 'button',
			label: 'Login',
			href: '/login',
		},
		{
			type: 'button',
			label: 'Sign up',
			href: '/signup',
		},
	];

	return (
		<>
			<Navbar styles={styles} links={navLinks} />
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
						Finding professionals has never been this easy. Search for the type of
						professional you need and book an appointment with the one you prefer the
						most!
					</Text>
					<Button variant="primary" onClick={() => router.push('login')}>
						Get started
					</Button>
					<Flex w={'full'}></Flex>
				</Stack>
			</Container>
		</>
	);
}

export default HomeLayout;
