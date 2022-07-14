import {Select} from "@chakra-ui/react"
import {capitalize} from "@/utils/stringHelpers"

const SelectInput = ({input, register}) => (
  <Select id={input.id} {...register(input.id)}>
    {input?.options?.map((item, idx) => {
      let label = item
      let value = item

      if (typeof item === "object") {
        label = item.label
        value = item.value
      }

      return (
        <option key={idx} value={value}>
          {capitalize(label)}
        </option>
      )
    })} 
  </Select>
)

export default SelectInput
