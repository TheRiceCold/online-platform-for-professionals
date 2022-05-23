import Modal from "@/components/overlay/Modal"
import UserConnectionList from "../UserConnectionList"
import AlertDialog from "@/components/overlay/AlertDialog"

import {useQuery} from "react-query"
import {useDisclosure} from "@chakra-ui/react"
import {useConnections} from "@/connections_context"

function SubscribersModal({...props}) {
  const {getSubscribers} = useConnections()
  useQuery("clientele", getSubscribers)

  return (
    <Modal
      {...props}
      header="Subscribers"
    >
      
    </Modal>
  )
}

export default SubscribersModal

