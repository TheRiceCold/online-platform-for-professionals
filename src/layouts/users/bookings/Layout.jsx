import styles from "~/styles/Bookings.module.sass";

import Pagination from "../professionals/search/sidebar/Pagination";
import BookingsList from "./BookingsList";
import TabBar from "./TabBar";

import { Box } from "@chakra-ui/react";
import { useState } from "react";
// import {bookingLinks} from "@/data/mock_links"

function BookingsLayout() {
	const [tabStatus, setTabStatus] = useState("active");
  const [bookingLinks, setBookingLinks] = useState([]);

	return (
		<section className={styles.layout}>
			<Box className={styles.bookingContainer}>
				<TabBar 
          tabStatus={tabStatus} 
          setTabStatus={setTabStatus} 
        />
				<BookingsList 
          tabStatus={tabStatus} 
          setBookingLinks={setBookingLinks}
        />
			</Box>
			{/* bookingLinks pass is changed based on response*/}
			<Pagination links={bookingLinks} />
		</section>
	)
}

export default BookingsLayout
