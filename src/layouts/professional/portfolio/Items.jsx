import MoonLoader from "react-spinners/MoonLoader"
import {Text, Heading, Flex} from "@chakra-ui/react"
import {EditIcon, DeleteIcon} from "@chakra-ui/icons"

import {useQuery} from "react-query"
import {useWorkPortfolios} from "@/work_portfolios_context"

function Items(props) {
  const {
    modal,
    setAction, 
    setSelectedId, 
    deleteAlertDialog
  } = props
  const {getWorkPortfolios} = useWorkPortfolios()
  const {isLoading, data: portfolios} = useQuery("work_portfolios", getWorkPortfolios)

  const handleUpdate = id => {
    setAction("update")
    setSelectedId(id)
    modal.onOpen()
  }

  const handleDeleteAlert = id => {
    setSelectedId(id)
    deleteAlertDialog.onOpen()
  }

  return (isLoading ? 
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
  )
}

export default Items
