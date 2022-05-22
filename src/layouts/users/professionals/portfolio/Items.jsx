import Card from "./Card"
import {Flex, Grid} from "@chakra-ui/react"
import MoonLoader from "react-spinners/MoonLoader"

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
        )})
      : <h1>No work portfolios yet</h1>
      }
    </Grid>
  )
}

export default Items
