import Modal from "@/components/overlay/Modal"
import UserConnectionList from "../users/connections/UserConnectionList"

import {useQuery} from "react-query"
import {useDisclosure} from "@chakra-ui/react"
import {useConnections} from "@/connections_context"

function SubscriptionsModal({...props}) {
  const deleteAlertDialog = useDisclosure()
  const {getSubscriptions} = useConnections()

  const {
    data, 
    isLoading
  } = useQuery(
    "subscriptions", 
    getSubscriptions
  )

  return (
    <Modal {...props} header="Subscriptions">
      <UserConnectionList 
        connections={data}
        query="subscription"
        isLoading={isLoading}
        deleteAlertDialog={deleteAlertDialog}
      />
    </Modal>
  )
}

export default SubscriptionsModal
