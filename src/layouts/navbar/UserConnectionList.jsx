import styles from "@/styles/Components.module.sass"

import Button from "@/components/Button"
import {MoonLoader} from "react-spinners"
import {CloseIcon} from "@chakra-ui/icons"
import {Avatar, Box, Flex} from "@chakra-ui/react"
import { capitalize } from "@/utils/stringHelpers"

function UserConnectionList(props) {
  const {
    isLoading,
    connections,
    deleteAlertDialog, 
  } = props

  console.log(connections)

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
    </Box> 
  )
}

export default UserConnectionList
