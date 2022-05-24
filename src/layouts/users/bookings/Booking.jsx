import { getDate, getTime } from '@/utils/dateHelpers'
import { Tr, Td } from '@chakra-ui/react'

const Booking = ({ booking, actionBtn }) => {
	return (
		<Tr>
			<Td>{getDate(booking?.startTime)}</Td>
			<Td>
				{getTime(booking?.startTime)} - {getTime(booking?.endTime)}
			</Td>
			<Td>{booking?.name}</Td>
			<Td>{booking?.inviteeName}</Td>
			<Td>{booking?.inviteeEmail}</Td>
			<Td>{booking?.location?.location}</Td>
			<Td>{actionBtn}</Td>
		</Tr>
	);
};

export default Booking
