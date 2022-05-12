import RadioCard from "./RadioCard"
import {useRadioGroup, HStack} from "@chakra-ui/react"

const RadioGroup = ({input, register}) => {
  const {getRootProps, getRadioProps} = useRadioGroup({name: input.id})

  return (
    <HStack {...getRootProps()}>
      {input.options.map(value => {
        const radio = getRadioProps({value})
        return (
          <RadioCard key={value} {...radio}>
            {value}
          </RadioCard>
        )
      })}
    </HStack>
  )  
}

export default RadioGroup
