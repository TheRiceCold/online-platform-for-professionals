import { Heading } from "@chakra-ui/react";
import { Button } from "~/components";

import AlertDialog from "~/components/overlay/AlertDialog";
import Alert from "~/components/feedback/Alert";
import FormModal from "./FormModal";
import ServiceItems from "./Items";

import { useServices } from "~/contexts/users/professionals/services/Context";
import { useMutation, useQueryClient } from "react-query";
import { useDisclosure } from "@chakra-ui/react";
import { useState } from "react";

function ServicesLayout() {
  const modal = useDisclosure();
  const queryClient = useQueryClient();
  const [alert, setAlert] = useState();
  const { deleteService } = useServices();
  const deleteAlertDialog = useDisclosure();

  const [action, setAction] = useState("create");
  const [selectedId, setSelectedId] = useState();

  const deleteMutation = useMutation(deleteService, {
    onSuccess: async() => {
      deleteAlertDialog.onClose() 
      queryClient.invalidateQueries("services")
      setAlert({message: "Service deleted", status: "success"})
    }
  });

  const handleDelete = async () => 
    await deleteMutation.mutateAsync(selectedId);

  const handleCreate = () => {
    setAction("create")
    modal.onOpen()
  };

  return (
    <>
      {alert && <Alert {...alert}/>}
      <Heading my={4}>
        Services
      </Heading>
      <Button onClick={handleCreate} variant="primary">
        Add New
      </Button>
      <ServiceItems
        modal={modal}
        setAction={setAction}
        setSelectedId={setSelectedId}
        deleteAlertDialog={deleteAlertDialog}
      />
      <FormModal 
        {...modal}
        action={action}
        setAlert={setAlert}
        selectedId={selectedId}
      />
      <AlertDialog 
        // isCentered
        buttonColor="red"
        buttonLabel="Delete"
        {...deleteAlertDialog}
        header="Delete Service"
        buttonClick={handleDelete}
        label="Are you sure? You can't undo this action afterwards."
      />
    </>
  );
}

export default ServicesLayout;
