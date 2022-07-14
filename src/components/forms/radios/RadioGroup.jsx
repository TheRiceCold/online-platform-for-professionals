import {
  Flex, Radio,
  RadioGroup as ChakraRadioGroup, 
} from "@chakra-ui/react"

import {capitalize} from "@/utils/stringHelpers"

const RadioGroup = ({input, register}) => (
  <ChakraRadioGroup defaultValue={input.options[0]}>
    <Flex 
      mt={4}
      justifyContent="space-around"
    >
      {input.options.map(value => (
        <Radio 
          key={value} 
          value={value} 
          {...register(input.id)}
        >
          {capitalize(value)}
        </Radio>
      ))}
    </Flex>
  </ChakraRadioGroup>
)

export default RadioGroup
