import {HStack, Heading} from "@chakra-ui/react"
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

  const {data, isLoading, error} = useQuery(
    [`${filter}_bookings`, filter], 
    getFilterBookings, { retry: false }
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
    <MoonLoader color="white"/> 
    : error.response.status === 401 ? 
      <Heading mt={8}>
        Unauthorized, please register your calendly token
      </Heading> 
      : <HStack {...group} mt={8}>
        {options.map(value => {
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
