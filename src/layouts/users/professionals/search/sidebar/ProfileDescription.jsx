import styles from "~/styles/users/Professionals.module.sass";

import { StarIcon } from "@chakra-ui/icons";
import {
	SkeletonCircle,
	Box, Text,
	Avatar,
} from "@chakra-ui/react";

function ProfileDescription(props) {
  const {
    user, img, 
    isLoading, 
    setSelectedId,
  } = props;

	return (
    <Box 
      className={styles.description}
      onClick={() => setSelectedId(user.id)}
    >
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
          <Text className={styles.name}>{user.name}</Text>
					<Text>{user.attributes.headline}</Text>
					<Text>{user.attributes.officeAddress}</Text>
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
		</Box>
	)
}

export default ProfileDescription
