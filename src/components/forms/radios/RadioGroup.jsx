import {
  Flex, Radio,
  RadioGroup as ChakraRadioGroup, 
} from "@chakra-ui/react"
import {CheckIcon} from "@chakra-ui/icons"
import {capitalize} from "@/utils/stringHelpers"

const RadioGroup = ({input, register}) => {
  const {id, options} = input

  return (
    <ChakraRadioGroup defaultValue={options[0]}>
      <Flex 
        mt={4}
        justifyContent="space-around"
      >
        {
          options.map(value => (
          <Radio 
            key={value} 
            value={value} 
            {...register(id)}
          >
            {capitalize(value)}
          </Radio>
          ))
        }
      </Flex>
    </ChakraRadioGroup>
  )
}

export default RadioGroup
