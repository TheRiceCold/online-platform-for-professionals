import {
  Text,
  Button,
  Heading,
  useDisclosure,
} from "@chakra-ui/react"
import FormModal from "./FormModal"
import {EditIcon, DeleteIcon} from "@chakra-ui/icons"
import AlertDialog from "@/components/overlay/AlertDialog"

import {useState} from "react"
import {useQuery} from "react-query"
import {useWorkPortfolios} from "@/context/users/professionals/work_portfolios/Context"

function PortfolioLayout() {
  const modal = useDisclosure()
  const deleteAlertDialog = useDisclosure()
  const [action, setAction] = useState("create")
  const [selectedId, setSelectedId] = useState()
  const {getWorkPortfolios, deleteWorkPortfolio} = useWorkPortfolios()
  const {data: portfolios, isLoading} = useQuery("work_portfolios", getWorkPortfolios)

  const handleUpdate = id => {
    setAction("update")
    setSelectedId(id)
    modal.onOpen()
  }

  const handleDeleteAlert = id => {
    setSelectedId(id)
    deleteAlertDialog.onOpen()
  }

  return (
    <>
      <Button onClick={modal.onOpen}>New</Button>
      {isLoading ? 
        <h1>Loading...</h1> :
        portfolios.length ?
          portfolios.map((portfolio) => {
            const {id} = portfolio
            const {details, title} = portfolio?.attributes
            return (
              <div key={id}>
                <Heading>{title}</Heading>
                <Text>{details}</Text>
                <EditIcon 
                  cursor="pointer" 
                  onClick={() => handleUpdate(id)}
                />
                <DeleteIcon 
                  cursor="pointer" 
                  onClick={() => handleDeleteAlert(id)}
                />
              </div>
            )
          })
          : <h1>No work portfolios yet</h1>
      }
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
        buttonClick={() => deleteWorkPortfolio(selectedId)}
        label="Are you sure? You can't undo this action afterwards."
      />
    </>
  )
}

export default PortfolioLayout
