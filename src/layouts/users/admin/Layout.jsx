import {Box} from "@chakra-ui/react"
import Table from "@/components/table/Table"
import AlertDialog from "@/components/overlay/AlertDialog"

import {useUsers} from "@/contexts/users/Context"
import {useDisclosure as useAlert} from "@chakra-ui/react"

function AdminLayout() {
  const {fakeUsers, userTable} = useUsers("admin")
  const deleteAlertDialog = useAlert()

  return (
  <>
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
      <AlertDialog
        // isCentered
        buttonColor="red"
        header="Delete User"
        buttonLabel="Delete"
        {...deleteAlertDialog}
        label="Are you sure? You can't undo this action afterwards."
      />
    </Box>
  </>
  )
}

export default AdminLayout
