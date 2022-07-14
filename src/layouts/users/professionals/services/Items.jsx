import Card from "./Card"
import MoonLoader from "react-spinners/MoonLoader"
import {Flex, Grid, Heading} from "@chakra-ui/react"

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
        )}) : (
          <Flex justify="center" w="100vw" mt={16}>
            <Heading size="md" ml={10}>
              No work service yet
            </Heading>
          </Flex>
        )
      }
    </Grid>
  )
}

export default Items
