import styles from '@/styles/Components.module.sass'

import {Button} from "@chakra-ui/react"
import {PopupModal} from "react-calendly"
import {CalendarIcon} from "@chakra-ui/icons"

import {useState} from "react"

const CalendlyButton = (props) => {
	// TODO Replace with how to get client details if useContext will be used
	const { firstName, lastName, email } = props;
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div>
			<Button
				leftIcon={<CalendarIcon boxSize={5} />}
				onClick={() => setIsOpen(true)}
				className={styles.bookEvent}
			>
				Easy Book
			</Button>
			<PopupModal
				// TODO EDIT URL TO be dynamic
				// = user.professional.calendly_token.scheduling_url
				url="https://calendly.com/godfreyperalta"
				rootElement={document.getElementById('__next')}
				prefill={{
					email: email,
					firstName: firstName,
					lastName: lastName,
					name: `${firstName} ${lastName}`,
				}}
				onModalClose={() => setIsOpen(false)}
				open={isOpen}
			/>
		</div>
	);
};

export default CalendlyButton;
