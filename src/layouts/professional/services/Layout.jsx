import {
  Text,
  Button,
  Heading,
} from "@chakra-ui/react"
import CreateModal from "./CreateModal"

import {useQuery} from "react-query"
import {useServices} from "@/services_context"
import {useDisclosure} from "@chakra-ui/react"

function ServicesLayout() {
  const useModal = useDisclosure()
  const {getServices} = useServices()
  const {data: services, isLoading} = useQuery("services", getServices)

  return (
    <>
      <Button onClick={useModal.onOpen}>New</Button>
      {isLoading ?
        <h1>Loading...</h1> :
        services.length ?
          services.map((service, idx) => {
            const {
              details, title,
              minPrice, maxPrice
            } = service.attributes

            return (
              <div key={idx}>
                <Heading>{title}</Heading>
                <Text>{details}</Text>
                <Text>{minPrice} - {maxPrice}</Text>
              </div>
            )
          })
          : <h1>No work services yet</h1>
      }
      <CreateModal {...useModal} />
    </>
  )
}


export default ServicesLayout
