import { useConnections } from "~/contexts/connections/Context";
import { useDisclosure } from "@chakra-ui/react";
import { useQuery } from "react-query";

import UserConnectionList from "../UserConnectionList";
import Modal from "../overlay/Modal";

function MyProfessionalsModal({...props}) {
  const deleteAlertDialog = useDisclosure();
  const { getMyProfessionals } = useConnections();

  const { data, isLoading } = useQuery(
    "my_professionals", 
    getMyProfessionals
  );

  return (
    <Modal {...props} header="My Professionals">
      <UserConnectionList 
        query="professional"
        connections={data}
        deleteAlertDialog={deleteAlertDialog}
        isLoading={isLoading}
      />
    </Modal>
  );
}

export default MyProfessionalsModal;
