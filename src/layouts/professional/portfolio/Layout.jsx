import {
  Text,
  Button,
  Heading,
  useDisclosure,
} from "@chakra-ui/react"
import CreateModal from "./CreateModal"

import {useQuery} from "react-query"
import {useWorkPortfolios} from "@/context/users/professionals/work_portfolios/Context"

function PortfolioLayout() {
  const useModal = useDisclosure()
  const {getWorkPortfolios} = useWorkPortfolios()
  const {data: portfolios, isLoading} = useQuery("work_portfolios", getWorkPortfolios)

  return (
    <>
      <Button onClick={useModal.onOpen}>New</Button>
      {isLoading ? 
        <h1>Loading...</h1> :
        portfolios.length ?
          portfolios.map((portfolio, idx) => {
            const {details, title} = portfolio.attributes
            return (
              <div key={idx}>
                <Heading>{title}</Heading>
                <Text>{details}</Text>
              </div>
            )
          })
          : <h1>No work portfolios yet</h1>
      }
      <CreateModal {...useModal} />
    </>
  )
}

export default PortfolioLayout
