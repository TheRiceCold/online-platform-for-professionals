import styles from '@/styles/users/Professionals.module.sass';

import {
	Text,
	Avatar,
	Flex,
	Box,
	UnorderedList,
	ListItem,
} from '@chakra-ui/react';
import ActionButtons from './ActionButtons';
import { StarIcon } from '@chakra-ui/icons';
import Link from "@/components/navigation/Link"

import { useQueries } from 'react-query';
import { useUsers } from '@/users_context';
import { capitalize } from '@/utils/stringHelpers';

function ProfileOverview({ selectedId }) {
	const { getProfessional } = useUsers('professional');
	const [
		{ data: userDetails, isLoading },
		{ data: attributes },
		{ data: relationships },
		{ data: included },
	] = useQueries([
		{
			queryKey: ['included', selectedId],
			queryFn: getProfessional,
			select: (data) => data.included[0].attributes,
		},
		{
			queryKey: ['attributes', selectedId],
			queryFn: getProfessional,
			select: (data) => data.data.attributes,
		},
		{
			queryKey: ['relationships', selectedId],
			queryFn: getProfessional,
			select: (data) => data.data.relationships,
		},
		{
			queryKey: ['included', selectedId],
			queryFn: getProfessional,
			select: (data) => data.included,
		},
	]);

	const field = attributes?.field;
	const headline = attributes?.headline;
	const services = relationships?.services.data;
	const workPortfolios = relationships?.workPortfolios.data;
	const reviews = relationships?.reviews.data;

	return (
		<Box className={styles.overview_content}>
			<Flex className={styles.headline}>
				<Box className={styles.info}>
					<Box className={styles.displayPhoto}>
						<Avatar src="" size="2xl" borderRadius="full" border="4px solid white" />
					</Box>
					<Box>
            <Link className={styles.name} to={`/professionals/${selectedId}`} >
              {capitalize(`${userDetails?.firstName} ${userDetails?.lastName}`)}
            </Link>
						<Text className={styles.field} fontSize="xl">
							{field}
						</Text>
						<Text color="gray.500">
							0{userDetails?.contactNumber} | {userDetails?.email}
						</Text>
					</Box>
				</Box>
				<ActionButtons selectedId={selectedId} />
			</Flex>
			<Box className={styles.overview}>
				<Text color="#14a76c" fontSize="2xl" mb={4}>
					{headline}
				</Text>
				<Text color="#14a76c" fontSize="2xl">
					{!isLoading && !!services?.length ? 'Services' : 'No services available'}
				</Text>
				<UnorderedList spacing={3}>
					{!isLoading &&
						included
							.filter((data) => data.type === 'service')
							?.map((service, idx) => (
								<ListItem key={idx}>
									<Text>{service.attributes.title}</Text>
									<Text>{service.attributes.details}</Text>
									<Text as="i">
										{' '}
										Php {service.attributes.minPrice}-{service.attributes.maxPrice}
									</Text>
								</ListItem>
							))}
				</UnorderedList>
				<Text color="#14a76c" fontSize="2xl" mt={4}>
					{!isLoading && !!workPortfolios?.length
						? 'Work Portfolio'
						: 'No work portflio'}
				</Text>
				<UnorderedList>
					{!isLoading &&
						included
							.filter((data) => data.type === 'workPortfolio')
							?.map((workPort, idx) => (
								<ListItem key={idx}>
									<Text>{workPort.attributes.title}</Text>
									<Text>{workPort.attributes.details}</Text>
								</ListItem>
							))}
				</UnorderedList>
				<Text color="#14a76c" fontSize="2xl" mt={4}>
					{!isLoading && !!reviews?.length ? 'Reviews' : 'No reviews yet'}
				</Text>
				{!isLoading &&
					included
						.filter((data) => data.type === 'review')
						?.map((review, idx) => (
							<Box key={idx}>
								{[...Array(5)].map((n, i) => (
									<StarIcon
										key={i}
										color={i < review.attributes.rating ? '#ff652f' : 'gray'}
									/>
								))}
								<Text my={2}>{review.attributes.body}</Text>
							</Box>
						))}
			</Box>
		</Box>
	);
}

export default ProfileOverview;

