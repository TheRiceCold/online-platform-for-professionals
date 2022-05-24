import { getDate, getTime } from '@/utils/dateHelpers'
import { Tr, Td } from '@chakra-ui/react'

const Booking = ({ booking, actionBtn }) => {
  console.log(booking)
	return (
		<Tr>
			<Td>{getDate(booking?.start_time)}</Td>
			<Td>
				{getTime(booking?.start_time)} - {getTime(booking?.end_time)}
			</Td>
			<Td>{booking?.name}</Td>
			<Td>{booking?.invite_name}</Td>
			<Td>{booking?.invitee_email}</Td>
			<Td>{booking?.location?.join_url}</Td>
			<Td>{actionBtn}</Td>
		</Tr>
	);
};

export default Booking
