import Card from "./Card"
import {Flex, Grid} from "@chakra-ui/react"
import MoonLoader from "react-spinners/MoonLoader"

import {useQuery} from "react-query"
import {useServices} from "@/services_context"

function Items(props) {
  const {getServices} = useServices()
  const {isLoading, data: services} = useQuery("services", getServices)

  return (isLoading ? 
    <Flex alignItems="center" h="50vh">
      <MoonLoader color="white"/> 
    </Flex>
    : <Grid templateColumns="repeat(3, 1fr)" gap={6}>
      {services?.length ?
        services.map((service, idx) => {
          return (
            <Card
              key={idx} 
              {...props}
              service={service}
            />
        )})
      : <h1>No services yet</h1>
      }
    </Grid>
  )
}

export default Items
