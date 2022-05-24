import styles from '@/styles/users/Professionals.module.sass';

import { Avatar, Box, Text, SkeletonCircle } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

function ProfileDescription(props) {
	const { user, img, isLoading, setSelectedId } = props;

	return (
		<Box className={styles.description} onClick={() => setSelectedId(user.id)}>
			<Box className={styles.userInfo}>
				<SkeletonCircle size="116px" isLoaded={!isLoading}>
					<Avatar
						top={5}
						left={5}
						src={img}
						size="lg"
						position="relative"
						borderRadius="full"
						border="2px solid white"
					/>
				</SkeletonCircle>
				<Box>
					<Text className={styles.field}>{user.attributes.field}</Text>
					<Text className={styles.name}>{user.meta.name}</Text>
					<Text>{user.attributes.headline}</Text>
					<Text>{user.attributes.officeAddress}</Text>
				</Box>
			</Box>
			<Box className={styles.metrics} color="gray.500">
				{user.meta.averageRating ? (
					<Box className={styles.rating}>
						<Text fontSize="lg">{user.meta.averageRating}</Text>
						<Box paddingLeft="0.3rem">
							<StarIcon color="#ffe400" />
						</Box>
					</Box>
				) : (
					<Text>No ratings</Text>
				)}
				<Text>{user.relationships.subscribers.data.length} subscribers</Text>
				<Text>{user.relationships.clientele.data.length} clients</Text>
			</Box>
		</Box>
	);
}

export default ProfileDescription;
