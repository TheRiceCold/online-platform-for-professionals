import styles from "~/styles/Admin.module.sass";

import { Box, useDisclosure as useAlert } from "@chakra-ui/react";
import { useUsers } from "~/contexts/users/Context";
import { useAuth } from "~/contexts/auth/Context";
import { Meta, Navbar } from "~/components";

import AlertDialog from "~/components/overlay/AlertDialog";
import Table from "~/components/table/Table";

function Admin() {
  const { userFullname } = useAuth();
  const deleteAlertDialog = useAlert();
  const title = `${userFullname} | Admin`;
  const { navLinks, fakeUsers, userTable } = useUsers("admin");

  return (
    <main className={styles.main}>
      <Meta title={title} />
      <Navbar styles={styles} links={navLinks} />
      <Box mt={8}>
        <Table 
          isSort
          isSearch
          isStriped
          isPaginated
          data={fakeUsers} 
          // stripeColor="teal"
          searchLabel="Search user"
          columns={userTable(deleteAlertDialog)}
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
    </main>
  );
}

export default Admin;
