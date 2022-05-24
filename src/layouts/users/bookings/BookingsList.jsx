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

// import {
// 	upcomingBookings,
// 	finishedBookings,
// 	canceledBookings,
// } from '@/data/mock_bookings'
import {useQuery} from "react-query"
import {useEffect, useState} from "react"
import {useBookings} from "@/bookings_context"

const BookingsList = ({ tabStatus }) => {
  console.log(tabStatus)

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

	// TODO For changing to what is used on app
	useEffect(() => {
		// TODO
		// get bookings with query params tabStatus
		// ex/ response = /bookings?status=${tabstatus}
		//  setBookingsList(response[:data])

		// TODO Remove when above is okay
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

				// TODO For change to actual user role
				let currentUser = { role: 'professional' }
				// let currentUser = { role: 'client' };
				if (currentUser.role === 'professional') {
					setActionBtn(<FinishModal tabStatus={tabStatus} />)
				} else if (currentUser.role === 'client') {
					setActionBtn(<ReviewModal tabStatus={tabStatus} />)
				}
				break;
			case 'canceled':
				setBookingsList(bookings)
				setActionBtn('')
				break;
		}
	}, [tabStatus])

  console.log(bookings)

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
