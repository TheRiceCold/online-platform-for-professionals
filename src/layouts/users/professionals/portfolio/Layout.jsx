import AlertDialog from "~/components/overlay/AlertDialog";
import Alert from "~/components/feedback/Alert";
import FormModal from "./FormModal";
import PortfolioItems from "./Items";

import { useWorkPortfolios } from "~/contexts/users/professionals/work_portfolios/Context";
import { Heading, useDisclosure } from "@chakra-ui/react";
import { Button } from "~/components";
import {useState} from "react";
import {
  useQueryClient,
  useMutation,
} from "react-query";

function PortfolioLayout() {
  const modal = useDisclosure();
  const queryClient = useQueryClient();
  const [alert, setAlert] = useState();
  const deleteAlertDialog = useDisclosure();
  const { deleteWorkPortfolio } = useWorkPortfolios();

  const [action, setAction] = useState("create");
  const [selectedId, setSelectedId] = useState();

  const deleteMutation = useMutation(deleteWorkPortfolio, {
    onSuccess: async() => {
      deleteAlertDialog.onClose() 
      queryClient.invalidateQueries("work_portfolios")
      setAlert({message: "Portfolio deleted", status: "success"})
    }
  });

  const handleDelete = async () => 
    await deleteMutation.mutateAsync(selectedId)

  const handleCreate = () => {
    setAction("create")
    modal.onOpen()
  };

  return (
    <>
      {alert && <Alert {...alert}/>}
      <Heading my={4}>
        Work Portfolios
      </Heading>
      <Button onClick={handleCreate} variant="primary">
        Add New
      </Button>
      <PortfolioItems
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
        header="Delete Portfolio"
        buttonClick={handleDelete}
        label="Are you sure? You can't undo this action afterwards."
      />
    </>
  );
}

export default PortfolioLayout;
