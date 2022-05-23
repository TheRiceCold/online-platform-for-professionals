import styles from "@/styles/users/Professionals.module.sass"

import {
  Text, 
  Avatar,
  Flex, Box,
	UnorderedList, ListItem,
} from "@chakra-ui/react"
import ActionButtons from "./ActionButtons"
import {StarIcon} from "@chakra-ui/icons"

import {useQueries} from "react-query"
import {useUsers} from "@/users_context"
import {capitalize} from "@/utils/stringHelpers"

function ProfileOverview({selectedId}) {
  const {getProfessional} = useUsers("professional")
  const [
    {data: userDetails, isLoading},
    {data: attributes},
    {data: relationships},
  ] = useQueries([
    {
      queryKey: ["included", selectedId],
      queryFn: getProfessional, 
      select: data => data.included[0].attributes
    },
    {
      queryKey: ["attributes", selectedId],
      queryFn: getProfessional,
      select: data => data.data.attributes
    },
    {
      queryKey: ["relationships", selectedId],
      queryFn: getProfessional,
      select: data => data.data.relationsships
    }
  ])

  const field = attributes?.field
  const headline = attributes?.headline
  const services = relationships?.services.data
  const workPortfolios = relationships?.workPortfolios.data
  const reviews = relationships?.reviews.data

	return (
		<Box className={styles.overview_content}>
			<Flex className={styles.headline}>
				<Box className={styles.info}>
					<Box className={styles.displayPhoto}>
            <Avatar
              src=""
              size="2xl"
              borderRadius="full"
              border="4px solid white"
            />
					</Box>
					<Box>
						<Text className={styles.name} fontSize="xl">
              {capitalize(`${userDetails?.firstName} ${userDetails?.lastName}`)}
						</Text>
						<Text className={styles.field} fontSize="xl">
							{field}
						</Text>
						<Text color="gray.500">
              0{userDetails?.contactNumber} 
              {" "} | {userDetails?.email}
            </Text>
					</Box>
				</Box>
        <ActionButtons/>
			</Flex>
			<Box className={styles.overview}>
				<Text color="#14a76c" fontSize="2xl" mb={4}>
					{headline}
				</Text>
				<Text color="#14a76c" fontSize="2xl">
          {!isLoading && !!services?.length ? "Services" : "No services available"}
				</Text>
        <UnorderedList spacing={3}>
          {!isLoading && services?.map((service, idx) => (
            <ListItem key={idx}>
              <Text>{service.title}</Text>
              <Text>{service.details}</Text>
              <Text as="i"> Php {service.minPrice}-{service.maxPrice}</Text>
            </ListItem>
          ))}
        </UnorderedList>
				<Text color="#14a76c" fontSize="2xl" mt={4}>
          {!isLoading && !!workPortfolios?.length ? "Work Portfolio" : "No work portflio"}
				</Text>
				<UnorderedList>
					{!isLoading && workPortfolios?.map((portfolio, idx) => (
            <ListItem key={idx}>
              <Text>{portfolio.title}</Text>
              <Text>{portfolio.details}</Text>
            </ListItem>
          ))}
				</UnorderedList>
				<Text color="#14a76c" fontSize="2xl" mt={4}>
          {!isLoading && !!reviews?.length ? "Reviews" : "No reviews yet"}
				</Text>
				{!isLoading && reviews?.map((review, idx) => (
          <Box key={idx}>
            {[...Array(5)].map((n, i) => (
              <StarIcon key={i} color={i + 1 < review.rating ? "#ff652f" : "gray"} />
            ))}
            <Text>{review.body}</Text>
          </Box>
        ))}
			</Box>
		</Box>
	)
}

export default ProfileOverview
