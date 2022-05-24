import styles from '@/styles/Bookings.module.sass'

import {
	Text,
	Modal,
	Input,
	ModalBody,
	ModalHeader,
	ModalFooter,
	ModalOverlay,
	ModalContent,
	ModalCloseButton,
} from "@chakra-ui/react"

import Button from "@/components/Button"
import {DeleteIcon} from '@chakra-ui/icons'

import {useState} from "react"
import {useDisclosure} from "@chakra-ui/react"

const CancelModal = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	// TODO client_showed_up value in request body
	const [reason, setReason] = useState('');

	const handleInputChange = e => setReason(e.target.value)

	const cancelEvent = () => {
		// TODO call calendly api to cancel event
		// BASE_URL = 'https://api.calendly.com'
		// endpoint: "/scheduled_events/#{event_uuid}/cancellation",
		// (http_method: 'post',
		// url: "#{BASE_URL}#{endpoint}",
		// authorization: calendly token,
		// payload: { "reason": cancellation_reason }.to_json)
	};

	const resetState = () => {
		setReason('');
		onClose();
	};

	return (
		<>
			<Button
				onClick={onOpen}
        variant="delete"
				leftIcon={<DeleteIcon />}
			>
				<Text fontSize="sm">Cancel Appointment</Text>
			</Button>
			<Modal isOpen={isOpen} onClose={resetState} isCentered>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Cancel Appointment</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Text fontSize="xl">Please input reason for cancellation</Text>
						<Input
							id="email"
							type="email"
							value={reason}
							onChange={handleInputChange}
						/>
					</ModalBody>

					<ModalFooter justifyContent="center">
						<Button colorScheme="teal" mr={3} onClick={resetState}>
							Cancel
						</Button>
						<Button onClick={cancelEvent} className={styles.submitBtn}>
							Submit
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default CancelModal;
