import {useMemo} from "react"
import Table from "@/components/table/Table"
import {useTable, useSortBy} from "react-table"
import fakeUsers from "@/constants/data/fakeUsers.json"

const AdminLayout = () => {
  const COLUMNS = [
    {Header: "Id", accessor: "id"},
    {Header: "First Name", accessor: 'first_name'},
    {Header: "Last Name", accessor: 'last_name'},
    {Header: "Email", accessor: 'email'},
  ]

  return (
    <Table
      data={fakeUsers}
      columns={COLUMNS}
    />
  )
}

export default AdminLayout
