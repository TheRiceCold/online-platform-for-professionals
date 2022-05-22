import styles from "@/styles/Professionals.module.sass"

import ContactModal from "./ContactModal"
import {Text, Link, Avatar} from "@chakra-ui/react"

import {useDisclosure} from "@chakra-ui/react"
import {useAuth} from "@/contexts/auth/Context"
import {capitalize} from "@/utils/stringHelpers"

function Header(props) {
  const {contactInfo} = props
  const useModal = useDisclosure()
  const {
    userImage,
    userFullname,
    userLocation
  } = useAuth()

  return (
    <header className={styles.user_header}>
      <div className={styles.header_content}>
        <Avatar 
          top={-2}
          size="2xl" 
          src={userImage}
          position="relative"
          borderRadius="full"
          border="4px solid white"
        />
        <div className={styles.user_info}>
          <div className={styles.user_info_content}>
            <Text fontWeight={700} fontSize="26px">
              {userFullname} {" "}
            </Text>
            <Text fontSize="16px">
              {capitalize(contactInfo?.headline ?? "")}
            </Text>
            <Text fontSize="14px" color="gray.600">
              {userLocation} {" "}
              <Link 
                color="blue.500" 
                fontWeight={500}
                onClick={useModal.onOpen}
              >
                Contact Info
              </Link>
            </Text>
          </div>
        </div>
      </div>
      <ContactModal 
        {...useModal} 
        contactInfo={contactInfo}
      />
    </header>
  )
}

export default Header
