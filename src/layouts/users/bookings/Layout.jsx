import styles from '@/styles/Bookings.module.sass'

import TabBar from "./TabBar"
import {Box} from "@chakra-ui/react"
import BookingsList from "./BookingsList"
import Pagination from "@/professionals_layout/search/sidebar/Pagination"

import {useState} from "react"
import {bookingLinks} from "@/data/mock_links"

function BookingsLayout() {
	const [tabStatus, setTabStatus] = useState('active')

	return (
		<section className={styles.layout}>
			<Box className={styles.bookingContainer}>
				<TabBar 
          tabStatus={tabStatus} 
          setTabStatus={setTabStatus} 
        />
				<BookingsList tabStatus={tabStatus} />
			</Box>
			{/* bookingLinks pass is changed based on response*/}
			<Pagination links={bookingLinks} />
		</section>
	)
}

export default BookingsLayout
