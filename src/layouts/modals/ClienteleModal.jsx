import Modal from "@/components/overlay/Modal"
import UserConnectionList from "../users/connections/UserConnectionList"

import {useQuery} from "react-query"
import {useDisclosure} from "@chakra-ui/react"
import {useConnections} from "@/connections_context"

function ClienteleModal({...props}) {
  const deleteAlertDialog = useDisclosure()
  const {getClientele} = useConnections()

  const {
    data, 
    isLoading
  } = useQuery(
    "clientele", 
    getClientele
  )

  return (
    <Modal {...props} header="Clietele">
      <UserConnectionList 
        query="clientele"
        connections={data} 
        isLoading={isLoading}
        deleteAlertDialog={deleteAlertDialog}
      />
    </Modal>
  )
}

export default ClienteleModal
