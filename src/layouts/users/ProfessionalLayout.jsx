import {Heading, Button} from "@chakra-ui/react"
import {useStorage} from "@/hooks/useStorage"

const ProfessionalLayout = () => {
  const storage = useStorage()

  const handleLogout = () => {
    storage.removeItem({type: "session", key: "auth"})
    location.reload()
  }

  return (
    <div>
      <Heading> Professional </Heading>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  )
}

export default ProfessionalLayout
