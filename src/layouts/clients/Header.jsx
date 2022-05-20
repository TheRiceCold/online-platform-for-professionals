import styles from '@/styles/Clients.module.sass';

import {
	Text,
	Link,
	Avatar,
	Skeleton,
	useDisclosure,
	SkeletonCircle,
} from '@chakra-ui/react';

function Header(props) {
	const { isLoading, img, fullname, contactInfo } = props;

	return (
		<header className={styles.user_header}>
			<div className={styles.header_content}>
				<SkeletonCircle size="116px" isLoaded={!isLoading}>
					<Avatar
						top={-2}
						src={img}
						size="2xl"
						position="relative"
						borderRadius="full"
						border="4px solid white"
					/>
				</SkeletonCircle>
				<div className={styles.user_info}>
					<div className={styles.user_info_content}>
						<Skeleton h="30px" mb={2} isLoaded={!isLoading}>
							<Text fontWeight={700} fontSize="26px">
								{fullname} {''}
							</Text>
						</Skeleton>
						<Skeleton h="18px" isLoaded={!isLoading}>
							<Text fontSize="14px" color="gray.600">
								{/* location here */}
								{contactInfo.city}{' '}
							</Text>
						</Skeleton>
						<Skeleton h="18px" isLoaded={!isLoading}>
							<Text fontSize="14px" color="gray.600">
								{/* contact details here */}
								{contactInfo.contactNumber} | {contactInfo.email}
							</Text>
						</Skeleton>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
