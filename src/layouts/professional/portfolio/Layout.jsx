import {
  Text,
  Button,
  Heading,
  useDisclosure,
} from "@chakra-ui/react"
import FormModal from "./FormModal"
import {
  EditIcon,
  DeleteIcon,
} from "@chakra-ui/icons"

import {useState} from "react"
import {useQuery} from "react-query"
import {useWorkPortfolios} from "@/context/users/professionals/work_portfolios/Context"

function PortfolioLayout() {
  const modal = useDisclosure()
  const {getWorkPortfolios} = useWorkPortfolios()
  const [action, setAction] = useState("create")
  const [selectedId, setSelectedId] = useState()
  const {data: portfolios, isLoading} = useQuery("work_portfolios", getWorkPortfolios)

  const handleUpdate = id => {
    setAction("update")
    setSelectedId(id)
    modal.onOpen()
  }

  const handleDelete = id => {
    console.log(id) 
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
                  onClick={() => handleDelete(id)}
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
    </>
  )
}

export default PortfolioLayout
