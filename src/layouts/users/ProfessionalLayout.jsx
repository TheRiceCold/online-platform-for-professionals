import {Heading} from "@chakra-ui/react"
import {useStorage} from "@/hooks/useStorage"
import Navbar from "@/components/navbars/user/UserNavbar"

const ProfessionalLayout = () => {
  const storage = useStorage()

  const handleLogout = () => {
    storage.removeItem({type: "session", key: "auth"})
    location.reload()
  }

  return (
    <>
      <Navbar/>
      <Heading> Professional </Heading>
    </>
  )
}

export default ProfessionalLayout
