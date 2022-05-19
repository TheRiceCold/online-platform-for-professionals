import Navbar from "../navbar/Navbar"
import {useQuery} from "react-query"
import {useAppState} from "@/context/state/Context"

const ClientLayout = props => {
  const {
    useAuth,
    useClients, 
    useProfessionals, 
  } = useAppState()

  const {user} = useAuth()
  const {getClients} = useClients()
  const clients = useQuery("clients", getClients)

  const role = user.role.toLowerCase()
  const fullname = (
    role === "professional" ? 
      useProfessionals().fullname :
      ""
  )

  const navLinks = (
    role === "professional" ? 
      useProfessionals().navLinks :
      []
  )

  return (
    <>
      {user.isAuth &&
        <Navbar 
          user={user}
          links={navLinks}
          fullname={fullname}
        />
      }
      {clients.isLoading ? 
        <h1>Loading...</h1>
        : !clients.length ?
          <h1>No Clients</h1>
        : clients.data.map((client, i) => (
          <h1 key={i}>
            {client}
          </h1>
      ))}
    </>
  )
}

export default ClientLayout
