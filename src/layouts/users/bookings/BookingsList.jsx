import { 
  Table, 
  Tr, Th, 
  Thead, Tbody,
  TableContainer, 
} from '@chakra-ui/react'
import Booking from "./Booking"

import {useQueries} from "react-query"
import {useBookings} from "@/bookings_context"

const BookingsList = ({tabStatus, setBookingLinks}) => {
  const {getFilterBookings} = useBookings()
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
						<Th>Type</Th>
						<Th>Location</Th>
						{tabStatus === 'canceled' ? '' : <Th>Actions</Th>}
					</Tr>
				</Thead>
				<Tbody>
          {!isLoading && bookingList?.map(
            (booking, idx) => (
              <Booking
                key={idx}
                uuid={booking?.id}
                tabStatus={tabStatus}
                booking={booking?.attributes}
              />
            )
          )}
				</Tbody>
			</Table>
		</TableContainer>
	)
}

export default BookingsList
