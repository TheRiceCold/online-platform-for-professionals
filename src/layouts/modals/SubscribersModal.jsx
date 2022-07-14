import Modal from "@/components/overlay/Modal"
import UserConnectionList from "../users/connections/UserConnectionList"

import {useQuery} from "react-query"
import {useDisclosure} from "@chakra-ui/react"
import {useConnections} from "@/connections_context"

function SubscribersModal({...props}) {
  const deleteAlertDialog = useDisclosure()
  const {getSubscribers} = useConnections()

  const {
    data, 
    isLoading
  } = useQuery(
    "subscribers", 
    getSubscribers
  )

  return (
    <Modal {...props} header="Subscribers">
      <UserConnectionList 
        query="subscriber"
        connections={data} 
        isLoading={isLoading}
        deleteAlertDialog={deleteAlertDialog}
      />
    </Modal>
  )
}

export default SubscribersModal
