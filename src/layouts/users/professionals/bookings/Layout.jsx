import RadioCard from "@/components/forms/radios/RadioCard"
import {useRadioGroup, HStack} from '@chakra-ui/react'

function BookingsLayout() {
  const options = ["active", "canceled"]

  const {getRootProps, getRadioProps} = useRadioGroup({
    name: "status",
    defaultValue: "active",
    onChange: status => {
      console.log(status)
    },
  })

  const group = getRootProps()

  return (
    <HStack {...group} mt={8}>
      {options.map((value) => {
        const radio = getRadioProps({ value })
        return (
          <RadioCard key={value} {...radio}>
            {value}
          </RadioCard>
        )
      })}
    </HStack>
  )}

export default BookingsLayout
