import {useState} from "react"
import FormControl from "./FormControl"
import {Box, Flex, Button, Heading} from "@chakra-ui/react"

const InputMap = ({errors, register, inputList}) => {
  const numOfSteps = inputList.length
  const [formStep, setFormStep] = useState(0)
  const isGrouped = inputList[0].hasOwnProperty("inputs")

  if (isGrouped) {
    const form = inputList[0] 

    return (
      <Box key={form.heading}>
        <Heading>{form.heading}</Heading>
        {form.inputs.map(input => (
          <FormControl
            input={input}
            key={input.id}
            register={register}
            error={errors[input.id]}
          />
        ))}
        <Flex mt={4} justifyContent="center">
          {formStep !== 0 &&<Button>Skip</Button>}
          <Button>Next</Button>
        </Flex>
      </Box>
    )
  }

  return (inputList.map(obj => {

        // const inputs = obj.inputs.map(input => (
        //   <FormControl 
        //     input={input}
        //     key={input.id}
        //     register={register}
        //     error={errors[input.id]}
        //   /> 
        // ))
        //
        // return (
        //   <Box key={obj.heading}>
        //     <Heading>{obj.heading}</Heading>
        //   </Box>
        // )
        // return inputs
      // }

      return (
        <FormControl 
          input={obj}
          key={obj.id}
          register={register}
          error={errors[obj.id]}
        /> 
      )
    })
  )
}

export default InputMap
