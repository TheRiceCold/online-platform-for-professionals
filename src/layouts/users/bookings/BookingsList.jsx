import { 
  Table, 
  Tr, Th, 
  Thead, Tbody,
  TableContainer, 
} from '@chakra-ui/react'
import Booking from "./Booking"
import CancelModal from "./CancelModal"
import FinishModal from "./FinishModal"
import ReviewModal from "./ReviewModal"

import {useQuery} from "react-query"
import {useAuth} from "@/auth_context"
import {useEffect, useState} from "react"
import {useBookings} from "@/bookings_context"

const BookingsList = ({ tabStatus }) => {
  const {userRole} = useAuth()
	const [bookingsList, setBookingsList] = useState([])
	const [actionBtn, setActionBtn] = useState(<CancelModal />)

  const {getFilterBookings} = useBookings()
  const {data: bookings, isLoading} = useQuery(
    [`bookings_${tabStatus}`, tabStatus], 
      getFilterBookings, {
      onSuccess: data => {
        setBookingsList(data)
      },
      select: data => data.data
    }
  )

	useEffect(() => {
		switch (tabStatus) {
			case 'active':
				setBookingsList(bookings);
				setActionBtn(<CancelModal />)
				break;
			case 'pending':
				setBookingsList(bookings);
				setActionBtn(<FinishModal tabStatus={tabStatus} />)
				break;
			case 'finished':
				setBookingsList(bookings);

				if (userRole === 'professional') {
					setActionBtn(<FinishModal tabStatus={tabStatus} />)
				} else if (userRole === 'client') {
					setActionBtn(<ReviewModal tabStatus={tabStatus} />)
				}
				break;
			case 'canceled':
				setBookingsList(bookings)
				setActionBtn('')
				break;
		}
	}, [tabStatus])

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
          {!isLoading && bookingsList?.map((booking, idx) => (
						<Booking
              key={idx}
              booking={booking}
              actionBtn={actionBtn}
            />
          ))}
				</Tbody>
			</Table>
		</TableContainer>
	)
}

export default BookingsList
