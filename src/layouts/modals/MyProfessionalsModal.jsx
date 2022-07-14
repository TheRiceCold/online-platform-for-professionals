import Modal from "@/components/overlay/Modal"
import UserConnectionList from "../users/connections/UserConnectionList"

import {useQuery} from "react-query"
import {useDisclosure} from "@chakra-ui/react"
import {useConnections} from "@/connections_context"

function MyProfessionalsModal({...props}) {
  const deleteAlertDialog = useDisclosure()
  const {getMyProfessionals} = useConnections()

  const {
    data, 
    isLoading
  } = useQuery(
    "my_professionals", 
    getMyProfessionals
  )

  return (
    <Modal {...props} header="My Professionals">
      <UserConnectionList 
        query="professional"
        connections={data}
        deleteAlertDialog={deleteAlertDialog}
        isLoading={isLoading}
      />
    </Modal>
  )
}

export default MyProfessionalsModal
