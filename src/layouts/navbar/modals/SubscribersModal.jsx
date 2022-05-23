import Modal from "@/components/overlay/Modal"
import UserConnectionList from "../UserConnectionList"

import {useQuery} from "react-query"
import {useConnections} from "@/connections_context"

function SubscribersModal({...props}) {
  const {getSubscribers} = useConnections()

  const {
    data, 
    isLoading
  } = useQuery("subscribers", getSubscribers)

  return (
    <Modal {...props} header="Subscribers">
      <UserConnectionList connections={data} isLoading={isLoading}/>
    </Modal>
  )
}

export default SubscribersModal
