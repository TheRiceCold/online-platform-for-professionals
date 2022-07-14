import {
  Button,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialog as ChakraAlertDialog,
} from "@chakra-ui/react"
import {useRef} from "react"

const AlertDialog = props => {
  const {
    isCentered, 
    buttonColor, 
    buttonLabel,
    buttonClick,
    label, header, 
    isOpen, onClose,
  } = props
  const cancelRef = useRef()

  return (
    <ChakraAlertDialog
      isOpen={isOpen}
      onClose={onClose}
      isCentered={isCentered}
      motionPreset="slideInBottom"
      leastDestructiveRef={cancelRef}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize='lg' fontWeight='bold'>
            {header}
          </AlertDialogHeader>
          <AlertDialogBody>{label}</AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Cancel
            </Button>
            <Button 
              ml={3} 
              onClick={buttonClick}
              colorScheme={buttonColor}
            >
              {buttonLabel}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </ChakraAlertDialog>
  )
}

export default AlertDialog
