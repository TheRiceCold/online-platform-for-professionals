import styles from "@/styles/users/Professionals.module.sass"

import {
  Text, 
  Avatar,
  SkeletonCircle, 
  Flex, Box, Stack,
	UnorderedList, ListItem,
} from "@chakra-ui/react"
import Button from "@/components/Button"
import {StarIcon} from "@chakra-ui/icons"
import CalendlyButton from "@/components/booking/CalendlyButton"

import {useQuery} from "react-query"
import {useAuth} from "@/auth_context"
import {useUsers} from "@/users_context"
import {capitalize} from "@/utils/stringHelpers"

function ProfileOverview({selectedId}) {
  const {userRole} = useAuth()
  const {getProfessional} = useUsers("professional")
  const {data, isLoading} = useQuery(["professional", selectedId], getProfessional)

  const userDetails = !isLoading && data?.included[0].attributes
  const field = data?.data.attributes.field
  const headline = data?.data.attributes.headline
  const services = !!selectedId && data?.data.relationships.services.data
  const workPortfolios = !!selectedId && data?.data.relationships.workPortfolios.data
  const reviews = !!selectedId && data?.data.relationships.reviews.data

  console.log()

	return (
		<Box className={styles.overview_content}>
			<Flex className={styles.headline}>
				<Box className={styles.info}>
					<Box className={styles.displayPhoto}>
						<SkeletonCircle size="116px" isLoaded={true}>
							<Avatar
								src=""
								size="2xl"
								borderRadius="full"
								border="4px solid white"
							/>
						</SkeletonCircle>
					</Box>
					<Box>
						<Text className={styles.name} fontSize="xl">
              {capitalize(`${userDetails?.firstName} ${userDetails?.lastName}`)}
						</Text>
						<Text className={styles.field} fontSize="xl">
							{field}
						</Text>
						<Text color="gray.500">0{userDetails.contactNumber} | {userDetails.email}</Text>
					</Box>
				</Box>
        <Stack spacing={3} className={styles.actions}>
          {userRole === "client" && (
            <>
              {/*TODO Call post /connections */}
              <Button className={styles.subscribe}>
                Subscribe
              </Button>
              {/* TODO Disable button if not subscribed (client.subscription.includes(professional)) */}
              {/* TODO Replace with client details or remove props if useContext will be used */}
              <CalendlyButton
                firstName={'Luffy'}
                lastName={'Monkey'}
                email={'client2@email.com'}
              />
            </>
          )}
        </Stack>
			</Flex>
			<Box className={styles.overview}>
				<Text color="#14a76c" fontSize="2xl" mb={4}>
					{headline}
				</Text>
				<Text color="#14a76c" fontSize="2xl">
          {!isLoading && !!services?.length ? "Services" : "No services available"}
				</Text>
        <UnorderedList spacing={3}>
          {!isLoading && services.map((service, idx) => (
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
					{!isLoading && workPortfolios.map((portfolio, idx) => (
            <ListItem key={idx}>
              <Text>{portfolio.title}</Text>
              <Text>{portfolio.details}</Text>
            </ListItem>
          ))}
				</UnorderedList>
				<Text color="#14a76c" fontSize="2xl" mt={4}>
          {!isLoading && !!reviews?.length ? "Reviews" : "No reviews yet"}
				</Text>
				{!isLoading && reviews.map((review, idx) => (
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
