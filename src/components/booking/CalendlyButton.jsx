import styles from "~/styles/Components.module.sass";

import { useUsers } from "~/contexts/users/Context";
import { CalendarIcon } from "@chakra-ui/icons";
import { PopupModal } from "react-calendly";
import { Button } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { useState } from "react";

function CalendlyButton(props) {
	// TODO Replace with how to get client details if useContext will be used
	const { 
    email, selectedId,
    lastName, firstName
  } = props;
	const [isOpen, setIsOpen] = useState(false);
  const { getProfessional } = useUsers("professional");

  const { data: calendlyData }  = useQuery(
    ["selected", selectedId], 
    getProfessional, 
    {select: data => 
      data.included.find(currentValue => {
      if (currentValue.type === "calendlyToken")
        return currentValue;
      }) 
    }
  );

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
				url={calendlyData?.attributes.schedulingUrl}
				rootElement={document.getElementById("__next")}
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
}

export default CalendlyButton;
