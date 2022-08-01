import styles from "~/styles/users/Professionals.module.sass";

import { useUsers } from "~/contexts/users/Context";
import { Box, Flex } from "@chakra-ui/react";
import { useQuery } from "react-query";

import ProfileDescription from "./ProfileDescription";
import MoonLoader from "react-spinners/ClipLoader";
import Pagination from "./Pagination";

function UsersSidebar({ setSelectedId }) {
  const { getProfessionals } = useUsers("professional");
  const { data: professionals, isLoading } = useQuery(
    "professionals", 
    getProfessionals, 
    { select: data => data.data }
  );

	return (
    <Box className={styles.users_sidebar}>
			{/*TODO Insert get /professionals/search here */}
      {!isLoading ?
        professionals?.map((user, idx) => (
          <ProfileDescription
            img={""}
            key={idx}
            user={user}
            isLoading={isLoading}
            setSelectedId={setSelectedId}
          />
        )) : (
          <Flex justify="center" mt={4}>
            <MoonLoader color="white" size={50}/> 
          </Flex>
        )
      }
			<Pagination />
		</Box>
	);
}

export default UsersSidebar;
