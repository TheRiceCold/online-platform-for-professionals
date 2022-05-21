import {
  Text,
  Button,
  Heading,
  useDisclosure,
} from "@chakra-ui/react"
import {useQuery} from "react-query"
import {useServices} from "@/context/users/professionals/services/Context"

function ServicesLayout() {
  const useModal = useDisclosure()
  const {getServices} = useServices()
  const {data: services, isLoading} = useQuery("services", getServices)

  return (
    <h1>Services</h1>
  )
}


export default ServicesLayout
