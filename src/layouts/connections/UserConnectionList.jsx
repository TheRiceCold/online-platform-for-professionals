import styles from "@/styles/Components.module.sass"

import Button from "@/components/Button"
import {MoonLoader} from "react-spinners"
import {CloseIcon} from "@chakra-ui/icons"
import {Avatar, Box, Flex} from "@chakra-ui/react"
import AlertDialog from "@/components/overlay/AlertDialog"

import {useMutation} from "react-query"
import {useDisclosure} from "@chakra-ui/react"
import {capitalize} from "@/utils/stringHelpers"
import {useConnections} from "@/connections_context"

function UserConnectionList(props) {
  const {isLoading, connections} = props
  const deleteAlertDialog = useDisclosure()

  const {deleteConnection} = useConnections()
  const deleteMutation = useMutation(deleteConnection)

  const handleDelete = () => {
    console.log("delete connection")    
  }

  return (
    <Box className={styles.list_wrapper}>
      {isLoading ? 
        <Flex justify="center" alignItems="center">
          <MoonLoader color="white"/> 
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
        header="Remove Subscriber?"
        buttonClick={handleDelete}
        label="Are you sure? You can't undo this action afterwards."
      />
    </Box> 
  )
}

export default UserConnectionList
