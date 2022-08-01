import UserConnectionList from "../UserConnectionList";
import Modal from "../overlay/Modal";

import { useConnections } from "~/contexts/connections/Context";
import { useDisclosure } from "@chakra-ui/react";
import { useQuery } from "react-query";

function SubscriptionsModal({...props}) {
  const deleteAlertDialog = useDisclosure();
  const { getSubscriptions } = useConnections();

  const { data, isLoading } = useQuery(
    "subscriptions", 
    getSubscriptions
  );

  return (
    <Modal {...props} header="Subscriptions">
      <UserConnectionList 
        connections={data}
        query="subscription"
        isLoading={isLoading}
        deleteAlertDialog={deleteAlertDialog}
      />
    </Modal>
  );
}

export default SubscriptionsModal;
