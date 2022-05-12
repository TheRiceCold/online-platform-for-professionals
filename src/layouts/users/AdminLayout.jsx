import {
  Box, Button,
  useDisclosure as useAlert
} from "@chakra-ui/react"
import Table from "@/components/table/Table"
import Alert from "@/components/alerts/Alert"
import {format as dateFormat} from "date-fns"
import fakeUsers from "@/constants/data/fakeUsers.json"
import Navbar from "@/components/navbars/user/UserNavbar"
import {DeleteIcon, EditIcon, CheckIcon} from "@chakra-ui/icons"

const AdminLayout = () => {
  const deleteAlert = useAlert()

  const COLUMNS = [
    {Header: "Id", accessor: "id"},
    {Header: "First Name", accessor: 'first_name'},
    {Header: "Last Name", accessor: 'last_name'},
    {
      Header: "Date of Birth", 
      accessor: 'date_of_birth',
      Cell: ({value}) => dateFormat(new Date(value), "dd/MM/yyyy")
    },
    {Header: "Email", accessor: 'email'},
    {Header: "Field", accessor: 'field'},
    {Header: "Phone no.", accessor: 'phone_no'},
    {
      Header: "Verification",
      accessor: "verified",
      Cell: ({row}) => {
        const isVerified = row.values.verified
        return (
        <> 
          {isVerified ? 
            <CheckIcon color="green" w={5} h={5}/> :
            <Button size="sm" colorScheme="green">
              Verify
            </Button>
          }
        </>
        )
      }
    },
    {
      Header: "Actions",
      Cell: ({ row }) => (
        <>
          <Button size="sm" colorScheme="teal">
            <EditIcon/>
          </Button>
          <Button 
            ml={2} 
            size="sm" 
            colorScheme="red"
            onClick={deleteAlert.onOpen}
          >
            <DeleteIcon/>
          </Button>
        </>
      ),
    }
  ]

  const navbarLinks = ["Dashboard", "Users", "Messages"]

  return (
  <>
    <Navbar links={navbarLinks}/>
    <Box mt={8}>
      <Table 
        isSort
        isSearch
        isStriped
        isPaginated
        data={fakeUsers} 
        columns={COLUMNS}
        // stripeColor="teal"
        searchLabel="Search user"
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
