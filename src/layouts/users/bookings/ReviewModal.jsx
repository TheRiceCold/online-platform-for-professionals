import styles from '@/styles/Bookings.module.sass';
import { PlusSquareIcon, StarIcon } from '@chakra-ui/icons';
import {
	Button,
	Text,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	Textarea,
	IconButton,
} from '@chakra-ui/react';
import { useState } from 'react';

const ReviewModal = ({ tabStatus }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	// TODO client_showed_up value in request body
	const [review, setReview] = useState('');
	const [rating, setRating] = useState('');

	const handleInputChange = (e) => setReview(e.target.value);

	const addReview = () => {
		// TODO post /professionals/:professional_id/review to create client as show or no show
	};

	const editReview = () => {
		// TODO post /professionals/:professional_id/review/:id to create client as show or no show
	};

	const resetState = () => {
		setReview('');
		setRating(0);
		onClose();
	};

	return (
		<>
			<Button
				onClick={onOpen}
				className={styles.finishBtn}
				leftIcon={<PlusSquareIcon />}
			>
				{/* TODO add condition to be "Edit Review" if review between the professional and client exists */}
				{/* <Text fontSize="sm">
					{'TODO insert condition here' ? 'Add Review' : 'Edit Review'}
				</Text> */}
				<Text fontSize="sm">Add Review</Text>
			</Button>
			<Modal isOpen={isOpen} onClose={resetState} size="xl" isCentered>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>
						{/* TODO add condition to be "Edit Review" if review between the professional and client exists */}
						{/* {TODO insert condition here ?
							? 'Add Review'
							: 'Edit Review'} */}
						Add Review
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						{[...Array(5)].map((n, i) => (
							<IconButton
								key={i}
								aria-label="Rating"
								icon={<StarIcon />}
								onClick={() => setRating(i + 1)}
								className={styles.starRating}
								variant="ghost"
								color={i + 1 <= rating ? '#ff652f' : 'gray'}
							/>
						))}
						<Textarea
							value={review}
							onChange={handleInputChange}
							placeholder="Input your review here"
							size="md"
							my={2}
						/>
					</ModalBody>

					<ModalFooter justifyContent="center">
						<Button colorScheme="teal" mr={3} onClick={resetState}>
							Cancel
						</Button>
						{/* Add condition in onclick to add or edit review */}
						<Button onClick={addReview} className={styles.submitBtn}>
							Submit
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default ReviewModal;
