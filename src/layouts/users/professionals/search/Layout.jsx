import styles from "@/styles/users/Professionals.module.sass"

import {Box} from "@chakra-ui/react"
import UsersSidebar from "./UsersSidebar"
import ProfileOverview from "./ProfileOverview"

import {useState} from "react"

const ProfessionalsLayout = () => {
  const [selectedId, setSelectedId] = useState(null)

  console.log(selectedId)
	return (
    <Box 
      my={4} as="section" 
      className={styles.layout}
    >
      <UsersSidebar setSelectedId={setSelectedId}/>
      {selectedId && <ProfileOverview selectedId={selectedId}/>}
    </Box>
	)
}

export default ProfessionalsLayout
