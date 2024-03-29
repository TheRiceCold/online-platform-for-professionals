import styles from "~/styles/Bookings.module.sass";

import { DeleteIcon } from "@chakra-ui/icons";
import { Button } from "~/components";
import {
	ModalCloseButton,
	ModalOverlay,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalBody,
	Modal,
	Input,
	Text,
} from "@chakra-ui/react";

import { useCalendlyToken } from "~/contexts/users/professionals/calendly_token/Context";
import { useUsers } from "~/contexts/users/Context";
import { useDisclosure } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { useState } from "react";

const CancelModal = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	// TODO client_showed_up value in request body
	const [reason, setReason] = useState("");

  const { postCancelEvent, getCalendlyToken } = useCalendlyToken();
  const { getUserProfessional } = useUsers("professional");
	const handleInputChange = e => setReason(e.target.value);

  const { data: calendlyTokenId } = useQuery(
    "calendly_token_id", 
    getUserProfessional, {
      select: data => data.data.relationships
        .calendlyToken.data.id,
    }
  );

  const {data: calendlyToken} = useQuery(
    ["calendly_token", calendlyTokenId],
    getCalendlyToken, {
      enabled: !!calendlyTokenId,
      select: data => data.attributes.authorization
    }
  )

	const cancelEvent = () => {
		// TODO call calendly api to cancel event
		// BASE_URL = 'https://api.calendly.com'
		// endpoint: "/scheduled_events/#{event_uuid}/cancellation",
		// (http_method: 'post',
		// url: "#{BASE_URL}#{endpoint}",
		// authorization: calendly token,
		// payload: { "reason": cancellation_reason }.to_json)
    postCancelEvent(calendlyToken, reason)
	}

	const resetState = () => {
		setReason('');
		onClose();
	}

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
						<Button 
              mr={3} 
              colorScheme="teal" 
              onClick={resetState}
            >
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
