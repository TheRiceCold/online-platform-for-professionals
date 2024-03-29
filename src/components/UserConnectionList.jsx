import styles from "~/styles/Components.module.sass"

import { useConnections } from "~/contexts/connections/Context";
import { Avatar, Box, Flex, Heading } from "@chakra-ui/react";
import { capitalize } from "~/lib/utils/stringHelpers";
import { useDisclosure } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { MoonLoader } from "react-spinners";
import { useMutation } from "react-query";

import AlertDialog from "./overlay/AlertDialog";
import Button from "./Button";

function UserConnectionList(props) {
  const { isLoading, connections, query } = props;
  const deleteAlertDialog = useDisclosure();

  const { deleteConnection } = useConnections();
  const deleteMutation = useMutation(deleteConnection);

  const handleDelete = () => {
    // deleteMutation.mutate()
    console.log("delete connection")    
  };

  return (
    <Box className={styles.list_wrapper}>
      {isLoading ? 
        <Flex justify="center" alignItems="center">
          <MoonLoader color="white"/> 
        </Flex> :
        !connections?.length ?
          <Flex justify="center" alignItems="center">
            <Heading mt={4} size="md">
              No {capitalize(query)}s yet
            </Heading>
          </Flex> :
            <ul className={styles.list}>
              {connections?.map((data, idx) => {
                const {firstName, lastName, email} = data.attributes
                const fullname = capitalize(`${firstName} ${lastName}`)

                return (
                  <li key={idx} className={styles.list_item}>
                    <Avatar/>
                    <div className={styles.list_item_content}>
                      <h4>{fullname}</h4>
                      <p>{email}</p>
                    </div>
                    <div className={styles.list_item_buttons}>
                      <Button 
                        h={8} w={5} 
                        variant="delete"
                        onClick={deleteAlertDialog.onOpen}
                      >
                        <CloseIcon h={3}/>
                      </Button>
                    </div>
                  </li> 
                )
              })}
            </ul> 
      }

      {/* Delete Connection Alert */}
      <AlertDialog 
        isCentered
        buttonColor="red"
        buttonLabel="Delete"
        {...deleteAlertDialog}
        buttonClick={handleDelete}
        header={`Remove ${capitalize(query)}?`}
        label="Are you sure? You can't undo this action afterwards."
      />
    </Box> 
  )
}

export default UserConnectionList;
