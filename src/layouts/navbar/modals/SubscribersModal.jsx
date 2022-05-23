import Modal from "@/components/overlay/Modal"
import UserConnectionList from "../UserConnectionList"
import AlertDialog from "@/components/overlay/AlertDialog"

import {useQuery} from "react-query"
import {useDisclosure} from "@chakra-ui/react"
import {useConnections} from "@/connections_context"

function SubscribersModal({...props}) {
  const deleteAlertDialog = useDisclosure()
  const {getSubscribers} = useConnections()

  const {
    data, 
    isLoading
  } = useQuery("subscribers", getSubscribers)

  const handleDelete = () => {
    console.log("delete connection")
  }

  return (
    <Modal {...props} header="Subscribers">
      <UserConnectionList 
        connections={data}
        isLoading={isLoading}
        deleteAlertDialog={deleteAlertDialog}
      />

      {/* Delete Connection Alert */}
      <AlertDialog 
        isCentered
        buttonColor="red"
        buttonLabel="Delete"
        {...deleteAlertDialog}
        header="Remove Subscriber?"
        buttonClick={handleDelete}
        label="Are you sure? You can't undo this action afterwards."
      />
    </Modal>
  )
}

export default SubscribersModal
