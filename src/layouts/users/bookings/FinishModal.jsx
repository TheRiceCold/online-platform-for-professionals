import styles from "@/styles/Bookings.module.sass"
import {CheckIcon, EditIcon} from "@chakra-ui/icons"
import {
	Text,
	Modal,
	Stack,
	Radio,
	Button,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	RadioGroup,
} from "@chakra-ui/react"

import {useState} from "react"
import {useDisclosure} from "@chakra-ui/react"

const FinishModal = ({ tabStatus }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	// TODO client_showed_up value in request body
	const [showedUp, setShowedUp] = useState('true');

	const setBookingStatus = () => {
		// TODO post /bookings to create client as show or no show
	};

	const resetState = () => {
		setShowedUp('true');
		onClose();
	};

	return (
		<>
			<Button
				onClick={onOpen}
				className={styles.finishBtn}
				leftIcon={tabStatus === 'pending' ? <CheckIcon /> : <EditIcon />}
			>
				<Text fontSize="sm">
					{tabStatus === 'pending' ? 'Mark as finished' : 'Edit client attendance'}
				</Text>
			</Button>
			<Modal isOpen={isOpen} onClose={resetState} isCentered>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>
						{tabStatus === 'pending'
							? 'Mark appointment as finished'
							: 'Edit client attendance'}
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Text fontSize="xl">Did the client show up?</Text>
						<RadioGroup onChange={setShowedUp} value={showedUp}>
							<Stack spacing={6} direction="row">
								<Radio value="true">Yes</Radio>
								<Radio value="false">No</Radio>
							</Stack>
						</RadioGroup>
					</ModalBody>

					<ModalFooter justifyContent="center">
						<Button colorScheme="teal" mr={3} onClick={resetState}>
							Cancel
						</Button>
						<Button onClick={setBookingStatus} className={styles.submitBtn}>
							Submit
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default FinishModal;
