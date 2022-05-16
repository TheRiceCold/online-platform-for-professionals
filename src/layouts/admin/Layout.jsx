import Table from "@/components/table/Table"
import Navbar from "@/components/navbars/Navbar"
import {useAppState} from "@/context/state/context"
import Alert from "@/components/overlay/AlertDialog"
import {Box, useDisclosure as useAlert} from "@chakra-ui/react"

const AdminLayout = () => {
  const deleteAlert = useAlert()
  const {useAdmin} = useAppState()
  const {fakeUsers, userTable} = useAdmin()
  const navbarLinks = ["Dashboard", "Professionals", "Clients", "Bookings"]

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
