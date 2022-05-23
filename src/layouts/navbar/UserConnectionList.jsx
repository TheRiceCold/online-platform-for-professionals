import styles from "@/styles/Components.module.sass"

import Button from "@/components/Button"
import {CloseIcon} from "@chakra-ui/icons"
import {Avatar, Box} from "@chakra-ui/react"

function UserConnectionList(props) {
  const {deleteAlertDialog} = props

  return (
    <Box className={styles.list_wrapper}>
      <ul className={styles.list}>
        <li className={styles.list_item}>
          <Avatar/>
          <div className={styles.list_item_content}>
            <h4>Fullname</h4>
            <p>email</p>
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
      </ul> 
    </Box> 
  )
}

export default UserConnectionList
