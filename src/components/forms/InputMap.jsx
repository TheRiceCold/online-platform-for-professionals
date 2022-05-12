import MultiForm from "./MultiForm"
import FormControl from "./FormControl"
import {Button} from "@chakra-ui/react"

const InputMap = props => {
  const isGrouped = props.inputList[0].hasOwnProperty("inputs")

  if (isGrouped) return <MultiForm {...props}/>

  return (
  <>
    {props.inputList.map(obj => (
      <FormControl 
        input={obj}
        key={obj.id}
        register={props.register}
        error={props.errors[obj.id]}
      /> 
    )) 
    }
    <Button 
      mt={4} w="100%" 
      bg="teal" type="submit"
      isLoading={props.mutation.isLoading}
    >
      {props.submitValue}
    </Button>
  </>
  )
}

export default InputMap
