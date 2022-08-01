import styles from "~/styles/users/Professionals.module.sass"

import ProfileOverview from "./overview/ProfileOverview";
import UsersSidebar from "./sidebar/UsersSidebar";

import { Box } from "@chakra-ui/react";
import { useState } from "react";

const ProfessionalsLayout = () => {
  const [selectedId, setSelectedId] = useState(null);

	return (
    <Box 
      my={4} as="section" 
      className={styles.layout}
    >
      <UsersSidebar setSelectedId={setSelectedId}/>
      {selectedId && <ProfileOverview selectedId={selectedId}/>}
    </Box>
	);
}

export default ProfessionalsLayout;
