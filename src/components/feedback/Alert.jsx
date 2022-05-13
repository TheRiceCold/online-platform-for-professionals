import {
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react"
import {useRef} from "react"

const Alert = props => {
  const {
    isCentered, 
    alert, header, label,
    buttonColor, buttonLabel
  } = props
  const {isOpen, onClose} = alert
  const cancelRef = useRef()

  return (
    <AlertDialog
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
            <Button ml={3} colorScheme={buttonColor}>
              {buttonLabel}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  )
}

export default Alert
