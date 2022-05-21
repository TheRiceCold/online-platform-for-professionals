import {
  Text,
  Button,
  Heading,
  Flex,
} from "@chakra-ui/react"
import {
  EditIcon, 
  DeleteIcon
} from "@chakra-ui/icons"
import FormModal from "./FormModal"
import MoonLoader from "react-spinners/MoonLoader"
import AlertDialog from "@/components/overlay/AlertDialog"

import {useState} from "react"
import {useDisclosure} from "@chakra-ui/react"
import {
  useQuery, 
  useMutation,
  useQueryClient
} from "react-query"
import {
  useWorkPortfolios
} from "@/contexts/users/professionals/work_portfolios/Context"

function PortfolioLayout() {
  const {
    getWorkPortfolios, 
    deleteWorkPortfolio
  } = useWorkPortfolios()
  const modal = useDisclosure()
  const queryClient = useQueryClient()
  const deleteAlertDialog = useDisclosure()

  const [action, setAction] = useState("create")
  const [selectedId, setSelectedId] = useState()

  const {isLoading, data: portfolios} = useQuery("work_portfolios", getWorkPortfolios)

  const deleteMutation = useMutation(deleteWorkPortfolio)

  const handleUpdate = id => {
    setAction("update")
    setSelectedId(id)
    modal.onOpen()
  }

  const handleDeleteAlert = id => {
    setSelectedId(id)
    deleteAlertDialog.onOpen()
  }

  const handleDelete = async () => {
    deleteAlertDialog.onClose() 
    await deleteMutation.mutateAsync(selectedId)
    queryClient.invalidateQueries("work_portfolios")
  }

  return (
    <>
      <Button onClick={modal.onOpen}>New</Button>
      {isLoading ? 
        <Flex alignItems="center" h="50vh">
        <MoonLoader color="white"/> 
        </Flex>
        :
        portfolios?.length ?
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
        buttonClick={handleDelete}
        label="Are you sure? You can't undo this action afterwards."
      />
    </>
  )
}

export default PortfolioLayout
