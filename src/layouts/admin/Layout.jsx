import Navbar from "./navbar/Navbar"
import {useRouter} from "next/router"
import Table from "@/components/table/Table"
import {useAppState} from "@/context/state/Context"
import Alert from "@/components/overlay/AlertDialog"
import {Box, useDisclosure as useAlert} from "@chakra-ui/react"

function AdminLayout() {
  const {useAdmin, useAuth} = useAppState()
  const {fakeUsers, userTable} = useAdmin()
  const deleteAlert = useAlert()
  const {user} = useAuth()
  const router = useRouter()
  const navbarLinks = [
    "Dashboard", 
    "Professionals", 
    "Clients", 
    "Bookings"
  ]

  const role = user.role.toLowerCase()
  if (role !== "admin") router.push("/")    

  return (
  <>
    <Navbar links={navbarLinks} isAdmin/>
    <Box mt={8}>
      <Table 
        isSort
        isSearch
        isStriped
        isPaginated
        data={fakeUsers} 
        // stripeColor="teal"
        searchLabel="Search user"
        columns={userTable(deleteAlert)}
      />
      <Alert 
        // isCentered
        buttonColor="red"
        alert={deleteAlert}
        header="Delete User"
        buttonLabel="Delete"
        label="Are you sure? You can't undo this action afterwards."
      />
    </Box>
  </>
  )
}

export default AdminLayout
