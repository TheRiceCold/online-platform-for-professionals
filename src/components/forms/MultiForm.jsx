import {useState} from "react"
import FormControl from "./FormControl"
import {ChevronLeftIcon} from "@chakra-ui/icons"
import {Box, Flex, Button, Heading} from "@chakra-ui/react"

function MultiForm(props) {
  const [formStep, setFormStep] = useState(0)
  const {inputs, register, errors} = props
  const numOfSteps = inputs.length - 1
  const form = inputs[formStep] 

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
      <Flex 
        mb={16}
        alignItems="center" 
      >
        {formStep !== 0 &&
          <Button 
            w={1} 
            mr={8}
            type="button"
            onClick={() => gotoStep("back")}
          >
            <ChevronLeftIcon/>
          </Button>
        }
        <Heading>
          {form.heading}
        </Heading>
      </Flex>
      {form.inputs.map(input => (
        <FormControl
          input={input}
          key={input.id}
          register={register}
          error={errors[input.id]}
        />
      ))}
      <Flex mt={8} justifyContent="space-around">
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
