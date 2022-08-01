import styles from "~/styles/Components.module.sass";

import { useDisclosure } from "@chakra-ui/react";
import {
  Alert as ChakraAlert, 
  AlertDescription,
  CloseButton,
  AlertIcon,
  Flex,
} from "@chakra-ui/react";

function Alert({ message, status, variant }) {
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true });

  return (isOpen && (
    <Flex className={styles.alertContainer}>
      <ChakraAlert 
        status={status} 
        className={styles.alert}
        variant={variant ? variant : "left-accent"}
      >
        <Flex>
          <AlertIcon />
          <AlertDescription ml={4}>
            {message}
          </AlertDescription>
        </Flex>
        <CloseButton
          onClick={onClose}
          className={styles.alertCloseButton}
        />
      </ChakraAlert>
    </Flex>
  ));
}

export default Alert;
