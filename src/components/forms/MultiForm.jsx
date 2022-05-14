import {useState} from "react"
import FormControl from "./FormControl"
import {Box, Flex, Button, Heading} from "@chakra-ui/react"

const MultiForm = props => {
  const {inputList, register, errors} = props
  const [formStep, setFormStep] = useState(0)
  const numOfSteps = inputList.length - 1
  const form = inputList[formStep] 

  const gotoStep = type => {
    switch (type) {
      case "next": 
        setFormStep(cur => cur+1)
        break;
      case "back": 
        setFormStep(cur => cur-1)
        break;
    }
  }

  return (
    <Box key={form.heading}>
      <Heading mb={16}>{form.heading}</Heading>
      {form.inputs.map(input => (
        <FormControl
          input={input}
          key={input.id}
          register={register}
          error={errors[input.id]}
        />
      ))}
      <Flex mt={8} justifyContent="space-around">
        {formStep !== 0 &&
          <Button 
            w="8em" 
            type="button"
            onClick={() => gotoStep("back")}
          >
            Back
          </Button>
        }
        {formStep !== numOfSteps &&
          <Button 
            w="8em" 
            bg="teal" 
            type="button"
            onClick={() => gotoStep("next")}
          >
            Next
          </Button>
        }
        {formStep === numOfSteps &&
          <Button 
            w="8em" 
            bg="teal" 
            type="submit"
            isLoading={props.isLoading}
          >
            Submit
          </Button>
        }
      </Flex>
    </Box>
  )
}

export default MultiForm
