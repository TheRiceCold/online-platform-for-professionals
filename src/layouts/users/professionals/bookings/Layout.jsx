import {HStack} from "@chakra-ui/react"
import MoonLoader from "react-spinners/MoonLoader"
import RadioCard from "@/components/forms/radios/RadioCard"

import {useState} from "react"
import {useQuery} from "react-query"
import {useBookings} from "@/bookings_context"
import {useRadioGroup} from "@chakra-ui/react"

function BookingsLayout() {
  const [filter, setFilter] = useState("")
  const options = ["all", "active", "canceled"]
  const {getFilterBookings} = useBookings()

  const {data, isLoading} = useQuery(
    [`${filter}_bookings`, filter], 
    getFilterBookings, { }
  )

  const {getRootProps, getRadioProps} = useRadioGroup({
    name: "status",
    defaultValue: "active",
    onChange: status => {
      setFilter(status === "all" ? "" : status)
    },
  })

  const group = getRootProps()

  return (isLoading ? 
    <MoonLoader color="white"/> :
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
