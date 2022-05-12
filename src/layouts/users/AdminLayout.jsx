import {useMemo} from "react"
import {Box} from "@chakra-ui/react"
import Table from "@/components/table/Table"
import {format as dateFormat} from "date-fns"
import {useTable, useSortBy} from "react-table"
import fakeUsers from "@/constants/data/fakeUsers.json"

const AdminLayout = () => {
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
    {Header: "Phone no.", accessor: 'phone_no'}
  ]

  return (
    <Box mt={8}>
      <Table 
        isSort
        isSearch
        isStriped
        isPaginated
        stripeColor="gray"
        data={fakeUsers} 
        columns={COLUMNS}
        searchLabel="Search user"
      />
    </Box>
  )
}

export default AdminLayout
