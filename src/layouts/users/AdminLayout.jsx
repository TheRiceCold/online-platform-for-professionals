import {useMemo} from "react"
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
    <Table 
      isSort
      isSearch
      data={fakeUsers} 
      columns={COLUMNS}
    />
  )
}

export default AdminLayout
