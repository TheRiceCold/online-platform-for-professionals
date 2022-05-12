import {useState} from "react"
import FormControl from "./FormControl"
import {Box, Flex, Button, Heading} from "@chakra-ui/react"

const MultiForm = ({inputList, register, errors}) => {
  const [formStep, setFormStep] = useState(0)
  const numOfSteps = inputList.length - 1
  const form = inputList[formStep] 

  const gotoStep = (type) => {
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
      <Heading>{form.heading}</Heading>
      {form.inputs.map(input => (
        <FormControl
          input={input}
          key={input.id}
          register={register}
          error={errors[input.id]}
        />
      ))}
      <Flex mt={4} justifyContent="space-around">
        {formStep !== 0 &&
          <Button w="8em" onClick={() => gotoStep("back")}>
            Back
          </Button>
        }
        {formStep !== numOfSteps &&
          <Button 
            w="8em" 
            bg="teal" 
            onClick={() => gotoStep("next")}
          >
            Next
          </Button>
        }
        {formStep === numOfSteps &&
          <Button w="8em" bg="teal" type="submit">
            Submit
          </Button>
        }
      </Flex>
    </Box>
  )
}

export default MultiForm
