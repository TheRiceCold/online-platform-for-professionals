import {Select} from "@chakra-ui/react"
import {capitalize} from "@/utils/stringHelpers"

const SelectInput = ({register, id, input}) => (
  <Select {...register(id)}>
    {input?.options?.map(item => {
      const label = typeof item === "object" ? item.label : item
      const value = typeof item === "object" ? item.value : item

      return (
        <option key={value} value={value}>
          {capitalize(label)}
        </option>
      )
    })} 
  </Select>
)

export default SelectInput
