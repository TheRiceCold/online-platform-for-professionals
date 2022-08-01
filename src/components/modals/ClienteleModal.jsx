import { useConnections } from "~/contexts/connections/Context";
import { useDisclosure } from "@chakra-ui/react";
import { useQuery } from "react-query";

import UserConnectionList from "../UserConnectionList";
import Modal from "../overlay/Modal";

function ClienteleModal({...props}) {
  const deleteAlertDialog = useDisclosure();
  const { getClientele } = useConnections();

  const { data, isLoading } = useQuery("clientele", getClientele);

  return (
    <Modal {...props} header="Clietele">
      <UserConnectionList 
        query="clientele"
        connections={data} 
        isLoading={isLoading}
        deleteAlertDialog={deleteAlertDialog}
      />
    </Modal>
  );
}

export default ClienteleModal;
