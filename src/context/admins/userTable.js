import {Button} from "@chakra-ui/react"
import {format as dateFormat} from "date-fns"
import {DeleteIcon, EditIcon, CheckIcon} from "@chakra-ui/icons"

export default (deleteAlert) => [
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
