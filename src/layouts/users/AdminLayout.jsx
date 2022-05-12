import Table from "@/components/table/Table"
import Alert from "@/components/alerts/Alert"
import Navbar from "@/components/navbars/Navbar"
import fakeUsers from "@/constants/data/fakeUsers.json"
import usersColumns from "@/constants/tables/usersColumns"
import {Box, useDisclosure as useAlert} from "@chakra-ui/react"

const AdminLayout = () => {
  const deleteAlert = useAlert()
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
        columns={usersColumns(deleteAlert)}
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
