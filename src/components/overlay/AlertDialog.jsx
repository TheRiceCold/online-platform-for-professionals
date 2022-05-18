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
    alert, 
    label,
    header, 
    isCentered, 
    buttonColor, 
    buttonLabel,
    buttonClick,
  } = props
  const cancelRef = useRef()
  const {isOpen, onClose} = alert

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
    </AlertDialog>
  )
}

export default Alert
