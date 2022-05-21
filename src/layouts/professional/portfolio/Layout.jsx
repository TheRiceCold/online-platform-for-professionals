import FormModal from "./FormModal"
import PortfolioItems from "./Items"
import {Button} from "@chakra-ui/react"
import AlertDialog from "@/components/overlay/AlertDialog"

import {
  useMutation,
  useQueryClient
} from "react-query"
import {useState} from "react"
import {useDisclosure} from "@chakra-ui/react"
import {useWorkPortfolios} from "@/work_portfolios_context"

function PortfolioLayout() {
  const modal = useDisclosure()
  const queryClient = useQueryClient()
  const [alerts, setAlerts] = useState()
  const deleteAlertDialog = useDisclosure()
  const {deleteWorkPortfolio} = useWorkPortfolios()

  const [action, setAction] = useState("create")
  const [selectedId, setSelectedId] = useState()

  const deleteMutation = useMutation(deleteWorkPortfolio, {
    onSuccess: async() => {
      deleteAlertDialog.onClose() 
      queryClient.invalidateQueries("work_portfolios")
    }
  })

  const handleDelete = async () => 
    await deleteMutation.mutateAsync(selectedId)

  return (
    <>
      <Button onClick={modal.onOpen}>New</Button>
      <PortfolioItems
        modal={modal}
        setAction={setAction}
        setSelectedId={setSelectedId}
        deleteAlertDialog={deleteAlertDialog}
      />
      <FormModal 
        {...modal}
        action={action}
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
  )
}

export default PortfolioLayout
