import styles from "@/styles/Components.module.sass"

import {
	Avatar,
	Box, Text,
	SkeletonCircle,
	LinkBox, LinkOverlay,
} from "@chakra-ui/react"
import NextLink from "next/link"
import {StarIcon} from "@chakra-ui/icons"

function ProfileDescription({user, img, isLoading}) {
	return (
		<LinkBox className={styles.description}>
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
					<Text className={styles.field}>{user.professional.field}</Text>
					<NextLink href="#" passHref>
						<LinkOverlay className={styles.name}>{user.name}</LinkOverlay>
					</NextLink>
					<Text>{user.professional.headline}</Text>
					<Text>{user.professional.officeAddress}</Text>
				</Box>
			</Box>
			<Box className={styles.metrics} color="gray.500">
				<Box className={styles.rating}>
					<Text fontSize="lg">{user.meta.averageRating}</Text>
					<Box paddingLeft="0.3rem">
						<StarIcon color="#ffe400" />
					</Box>
				</Box>
				<Text>{user.relationships.subscribers.data.length} subscribers</Text>
				<Text>{user.relationships.clientele.data.length} clients</Text>
			</Box>
		</LinkBox>
	)
}

export default ProfileDescription
