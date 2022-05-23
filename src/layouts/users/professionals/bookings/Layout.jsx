import {HStack} from '@chakra-ui/react'
import RadioCard from "@/components/forms/radios/RadioCard"

import {useQuery} from "react-query"
import {useBookings} from "@/bookings_context"
import {useRadioGroup} from "@chakra-ui/react"

function BookingsLayout() {
  const options = ["all", "active", "canceled"]
  const {getBookings} = useBookings()

  const {data} = useQuery("bookings", getBookings)

  const {getRootProps, getRadioProps} = useRadioGroup({
    name: "status",
    defaultValue: "active",
    onChange: status => {

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
