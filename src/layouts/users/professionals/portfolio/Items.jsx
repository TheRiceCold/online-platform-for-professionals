import Card from "./Card"
import MoonLoader from "react-spinners/MoonLoader"
import {Flex, Grid, Heading} from "@chakra-ui/react"

import {useQuery} from "react-query"
import {useWorkPortfolios} from "@/work_portfolios_context"

function Items(props) {
  const {getWorkPortfolios} = useWorkPortfolios()
  const {isLoading, data: portfolios} = useQuery("work_portfolios", getWorkPortfolios)

  return (isLoading ? 
    <Flex alignItems="center" h="50vh">
      <MoonLoader color="white"/> 
    </Flex>
    : <Grid templateColumns="repeat(3, 1fr)" gap={6}>
      {portfolios?.length ?
        portfolios.map((portfolio, idx) => {
          return (
            <Card
              key={idx} 
              {...props}
              portfolio={portfolio}
            />
        )}) : (
          <Flex justify="center" w="100vw" mt={16}>
            <Heading size="md" ml={10}>
              No work portfolios yet
            </Heading>
          </Flex>
        )
      }
    </Grid>
  )
}

export default Items
