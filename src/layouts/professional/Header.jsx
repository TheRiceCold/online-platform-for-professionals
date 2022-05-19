import styles from "@/styles/Professionals.module.sass"

import {
  Avatar, Text,
  Skeleton, SkeletonCircle,
} from "@chakra-ui/react"
import Link from "@/components/navigation/link"

function Header(props) {
  const {
    isLoading,
    img, field,
    fullname, location, 
  } = props

  return (
    <header className={styles.user_header}>
      <div className={styles.header_content}>
        <SkeletonCircle size="116px" isLoaded={!isLoading}>
          <Avatar 
            top={-2}
            src={img}
            size="2xl" 
            position="relative"
            borderRadius="full"
            border="4px solid white"
          />
        </SkeletonCircle>
        <div className={styles.user_info}>
          <div className={styles.user_info_content}>
            <Skeleton h="30px" mb={2} isLoaded={!isLoading}>
              <Text fontWeight={700} fontSize="26px">
                {fullname} {" "}
              </Text>
            </Skeleton>
            <Skeleton h="20px" mb={2} isLoaded={!isLoading}>
              <Text fontSize="16px">
                {field}
              </Text>
            </Skeleton>
            <Skeleton h="18px" isLoaded={!isLoading}>
              <Text fontSize="14px" color="gray.600">
                {location} {" "}
                <Link 
                  to="/"
                  color="blue.500" 
                  fontWeight={500}
                >
                  Contact Info
                </Link>
              </Text>
            </Skeleton>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
