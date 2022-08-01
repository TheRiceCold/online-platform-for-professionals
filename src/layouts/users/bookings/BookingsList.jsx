import { useBookings } from "~/contexts/bookings/Context";
import { useAuth } from "~/contexts/auth/Context";
import { useEffect, useState } from "react";
import { useQueries } from "react-query";
import { 
  TableContainer, 
  Thead, Tbody,
  Tr, Th, 
  Table, 
} from "@chakra-ui/react";

import CancelModal from "./CancelModal";
import FinishModal from "./FinishModal";
import ReviewModal from "./ReviewModal";
import Booking from "./Booking";

const BookingsList = ({ tabStatus, setBookingLinks }) => {
  const { userRole } = useAuth();
	const [actionBtn, setActionBtn] = useState(<CancelModal />);

  const { getFilterBookings } = useBookings();
  const [
    {data: bookingList, isLoading},
    {data: bookingLinks},
  ] = useQueries([
    {
      queryKey:[`bookings_${tabStatus}`, tabStatus],
      queryFn: getFilterBookings, 
      select: data => data.data
    },
    {
      queryKey:[`bookings_links`, tabStatus],
      queryFn: getFilterBookings, 
      onSuccess: data => setBookingLinks(data),
      select: data => data.links
    }
  ])

	useEffect(() => {
		switch (tabStatus) {
			case "active":
				setActionBtn(<CancelModal />);
				break;
			case "pending":
				setActionBtn(<FinishModal tabStatus={tabStatus} />);
				break;
			case "finished":
				if (userRole === 'professional') 
					setActionBtn(<FinishModal tabStatus={tabStatus} />);
				else if (userRole === 'client')
					setActionBtn(<ReviewModal tabStatus={tabStatus} />);
				break;
			case "canceled":
				setActionBtn("");
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
						{tabStatus === "canceled" ? "" : <Th>Actions</Th>}
					</Tr>
				</Thead>
				<Tbody>
          {!isLoading && bookingList?.map((booking, idx) => (
						<Booking
              key={idx}
              booking={booking}
              actionBtn={actionBtn}
            />
          ))}
				</Tbody>
			</Table>
		</TableContainer>
	);
}

export default BookingsList;
