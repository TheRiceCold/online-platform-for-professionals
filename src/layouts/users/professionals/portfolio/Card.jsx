import {
  Center,
  Box, Stack,
  Heading, Text,
} from "@chakra-ui/react"
import Button from "@/components/Button"

import {useColorModeValue} from "@chakra-ui/react"

function Card(props) {
  const {
    modal,
    setAction, 
    setSelectedId, 
    deleteAlertDialog,
    portfolio
  } = props

  const {id, attributes} = portfolio
  const {title, details} = attributes

  const handleUpdate = () => {
    setAction("update")
    setSelectedId(id)
    modal.onOpen()
  }

  const handleDeleteAlert = () => {
    setSelectedId(id)
    deleteAlertDialog.onOpen()
  }

  return (
    <Center py={6}>
      <Box
        p={6}
        w="full"
        rounded="md"
        maxW={'445px'}
        boxShadow={'2xl'}
        bg={useColorModeValue('white', 'gray.900')}
      >
        <Stack>
          <Heading
            fontSize={'2xl'}
            color={useColorModeValue('gray.700', 'white')}
          >
            {title}
          </Heading>
          <Text color={'gray.500'}>
            {details}
          </Text>
        </Stack>
        <Stack
          mt="2rem"
          padding={2}
          width="100%"
          direction="row"
          alignItems="center"
          justifyContent="space-around"
        >
          <Button 
            variant="primary"
            onClick={handleUpdate}
          >
            Edit
          </Button>
          <Button 
            variant="delete"
            onClick={handleDeleteAlert}
          >
            Delete
          </Button>
        </Stack>
      </Box>
    </Center>
  )
}

export default Card
