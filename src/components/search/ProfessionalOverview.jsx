import styles from '@/styles/Components.module.sass';
import { Box, SkeletonCircle, Avatar, Text, Button } from '@chakra-ui/react';

const ProfessionalOverview = ({ img, isLoading }) => {
	return (
		<Box className={styles.overviewContainer}>
			<Box className={styles.header}>
				<Box className={styles.info}>
					<Box className={styles.displayPhoto}>
						<SkeletonCircle size="116px" isLoaded={!isLoading}>
							<Avatar
								src={img}
								size="2xl"
								borderRadius="full"
								border="4px solid white"
							/>
						</SkeletonCircle>
					</Box>
					<Box>
						<Text className={styles.name} fontSize="xl">
							Professional Name
						</Text>
						<Text className={styles.field} fontSize="xl">
							Professional Field
						</Text>
						<Text color="gray.500">Contact Number | Email</Text>
					</Box>
				</Box>
				<Box className={styles.actions}>
					{/* Call post /connections */}
					<Button className={styles.subscribe}>Subscribe</Button>
				</Box>
			</Box>
			<Box className={styles.overview}>
				<Text fontSize="2xl">Headline</Text>
				<Text fontSize="2xl">Services</Text>
				<Text fontSize="2xl">Work Portfolio</Text>
				<Text fontSize="2xl">Reviews</Text>
			</Box>
		</Box>
	);
};

export default ProfessionalOverview;
