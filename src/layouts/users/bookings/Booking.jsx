import {Tr, Td} from "@chakra-ui/react"
import CancelModal from "./CancelModal"
import FinishModal from "./FinishModal"
import ReviewModal from "./ReviewModal"

import {useAuth} from "@/auth_context"
import {useEffect, useState} from "react"
import {getDate, getTime} from "@/utils/dateHelpers"

const Booking = ({booking, tabStatus, uuid}) => {
  const {userRole} = useAuth()
	const [actionBtn, setActionBtn] = useState()

	useEffect(() => {
		switch (tabStatus) {
			case 'active':
				setActionBtn(<CancelModal uuid={uuid}/>)
				break;
			case 'pending':
				setActionBtn(
          <FinishModal 
            tabStatus={tabStatus} 
            email={booking?.invitee_email} 
          />)
				break;
			case 'finished':

				if (userRole === 'professional') {
					setActionBtn(<FinishModal tabStatus={tabStatus} />)
				} else if (userRole === 'client') {
					setActionBtn(<ReviewModal tabStatus={tabStatus} />)
				}
				break;
			case 'canceled':
				setActionBtn('')
				break;
		}
	}, [tabStatus])

  return (
    <Tr>
      <Td>{getDate(booking?.start_time)}</Td>
      <Td>
        {getTime(booking?.start_time)} - {getTime(booking?.end_time)}
      </Td>
      <Td>{booking?.name}</Td>
      <Td>{booking?.invite_name}</Td>
      <Td>{booking?.invitee_email}</Td>
      <Td>{booking?.location?.type}</Td>
      <Td>{booking?.location?.join_url}</Td>
      <Td>{actionBtn}</Td>
    </Tr>
  )
}

export default Booking
