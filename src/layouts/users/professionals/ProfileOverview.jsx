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
import {
	reviews,
	services,
	workPortfolios,
} from "@/data/mock_professional_data"
import {capitalize} from "@/utils/stringHelpers"

// TODO Insert selected professional data
// TODO REMOVE after adding context

function ProfileOverview({selectedId}) {
  const {userRole} = useAuth()
  const {getProfessional} = useUsers("professional")
  const {data} = useQuery(["professional", selectedId], getProfessional)

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
              {/* {capitalize(`${firstName} ${lastName}`)} */}
						</Text>
						<Text className={styles.field} fontSize="xl">
							Professional Field
						</Text>
						<Text color="gray.500">Contact Number | Email</Text>
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
					Headline text here
				</Text>
				<Text color="#14a76c" fontSize="2xl">
					Services
				</Text>
				<UnorderedList spacing={3}>
					{services.map((service, idx) => (
            <ListItem key={idx}>
              <Text>{service.title}</Text>
              <Text>{service.details}</Text>
              {service.minPrice ? (
                <Text as="i">
                  Php {service.minPrice}-{service.maxPrice}
                </Text>
              ) : (
                ''
              )}
            </ListItem>
          ))}
				</UnorderedList>
				<Text color="#14a76c" fontSize="2xl" mt={4}>
					Work Portfolio
				</Text>
				<UnorderedList>
					{workPortfolios.map((portfolio, idx) => (
            <ListItem key={idx}>
              <Text>{portfolio.title}</Text>
              <Text>{portfolio.details}</Text>
            </ListItem>
          ))}
				</UnorderedList>
				<Text color="#14a76c" fontSize="2xl" mt={4}>
					Reviews
				</Text>
				{reviews.map((review, idx) => {
					return (
						<Box key={idx}>
							{[...Array(5)].map((n, i) => (
								<StarIcon key={i} color={i + 1 < review.rating ? '#ff652f' : 'gray'} />
							))}
							<Text>{review.body}</Text>
						</Box>
					)
				})}
			</Box>
		</Box>
	)
}

export default ProfileOverview
