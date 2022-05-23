import {
	upcomingBookings,
	finishedBookings,
	canceledBookings,
} from '@/data/mock_bookings';
import { TableContainer, Table, Thead, Tr, Th, Tbody } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Booking from './Booking';
import CancelModal from './CancelModal';
import FinishModal from './FinishModal';

const BookingsList = ({ tabStatus }) => {
	const [bookingsList, setBookingsList] = useState(upcomingBookings);
	const [actionBtn, setActionBtn] = useState(<CancelModal />);

	// TODO For changing to what is used on app
	useEffect(() => {
		// TODO
		// get bookings with query params tabStatus
		// ex/ response = /bookings?status=${tabstatus}
		//  setBookingsList(response[:data])

		// TODO Remove when above is okay
		switch (tabStatus) {
			case 'active':
				setBookingsList(upcomingBookings);
				setActionBtn(<CancelModal />);
				break;
			case 'pending':
				setBookingsList(finishedBookings);
				setActionBtn(<FinishModal tabStatus={tabStatus} />);
				break;
			case 'finished':
				setBookingsList(finishedBookings);
				setActionBtn(<FinishModal tabStatus={tabStatus} />);
				break;
			case 'canceled':
				setBookingsList(canceledBookings);
				setActionBtn('');
				break;
		}
	}, [tabStatus]);

	return (
		<TableContainer>
			<Table variant="simple" size="lg">
				<Thead>
					<Tr>
						<Th>Date</Th>
						<Th>Time</Th>
						<Th>Event Type</Th>
						<Th>Client Name</Th>
						<Th>Client Email</Th>
						<Th>Location</Th>
						{tabStatus === 'canceled' ? '' : <Th>Actions</Th>}
					</Tr>
				</Thead>
				<Tbody>
					{bookingsList.map((booking, i) => {
						return <Booking key={i} booking={booking} actionBtn={actionBtn} />;
					})}
				</Tbody>
			</Table>
		</TableContainer>
	);
};

export default BookingsList;
