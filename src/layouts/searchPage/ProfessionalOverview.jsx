import styles from '@/styles/Professionals.module.sass'
import {
	Box,
	SkeletonCircle,
	Avatar,
	Text,
	Button,
	ButtonGroup,
	UnorderedList,
	ListItem,
} from "@chakra-ui/react"
import {StarIcon, AddIcon} from "@chakra-ui/icons"

// TODO Insert selected professional data
// TODO REMOVE after adding context
import {
	services,
	workPortfolios,
	reviews,
} from "../../temporaryMocks/mock_professional_data"
import CalendlyButton from "../../components/booking/CalendlyButton"

const ProfessionalOverview = ({ img, isLoading }) => {
	return (
		<Box className={styles.overviewContainer}>
			<Box className={styles.headline}>
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
					<ButtonGroup spacing={3}>
						{/*TODO Call post /connections */}
						<Button leftIcon={<AddIcon />} className={styles.subscribe}>
							Subscribe
						</Button>
						{/* TODO Disable button if not subscribed (client.subscription.includes(professional)) */}
						{/* TODO Replace with client details or remove props if useContext will be used */}
						<CalendlyButton
							firstName={'Luffy'}
							lastName={'Monkey'}
							email={'client2@email.com'}
						/>
					</ButtonGroup>
				</Box>
			</Box>
			<Box className={styles.overview}>
				<Text color="#14a76c" fontSize="2xl">
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
				<Text color="#14a76c" fontSize="2xl">
					Work Portfolio
				</Text>
				<UnorderedList>
					{workPortfolios.map((portfolio, idx) => {
						return (
							<ListItem key={idx}>
								<Text>{portfolio.title}</Text>
								<Text>{portfolio.details}</Text>
							</ListItem>
						)
					})}
				</UnorderedList>
				<Text color="#14a76c" fontSize="2xl">
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

export default ProfessionalOverview
