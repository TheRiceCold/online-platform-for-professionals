import UserConnectionList from "../UserConnectionList";
import Modal from "../overlay/Modal";

import { useConnections } from "~/contexts/connections/Context";
import { useDisclosure } from "@chakra-ui/react";
import { useQuery } from "react-query";

function SubscribersModal({...props}) {
  const deleteAlertDialog = useDisclosure();
  const { getSubscribers } = useConnections();

  const { data, isLoading } = useQuery(
    "subscribers", 
    getSubscribers
  );

  return (
    <Modal {...props} header="Subscribers">
      <UserConnectionList 
        query="subscriber"
        connections={data} 
        isLoading={isLoading}
        deleteAlertDialog={deleteAlertDialog}
      />
    </Modal>
  );
}

export default SubscribersModal;
