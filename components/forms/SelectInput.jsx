import {Select} from "@chakra-ui/react"
import {capitalize} from "@/utils/stringHelpers"

const SelectInput = ({register, id, input}) => (
  <Select {...register(id)}>
    {input?.options?.map(item => (
      <option key={item} value={item}>
        {capitalize(item)}
      </option>
    ))} 
  </Select>
)

export default SelectInput
