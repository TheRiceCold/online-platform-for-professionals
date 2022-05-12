import {useState} from "react"
import 'regenerator-runtime/runtime'
import {Input} from "@chakra-ui/react"
import {useAsyncDebounce} from "react-table"

const TableSearch = props => {
  const {filter, setFilter, label} = props
  const [value, setValue] = useState(filter)

  const onChangeHandler = useAsyncDebounce(
    value => setFilter(value.trim() || ""), 500)

  return (
    <Input 
      ml={8}
      mb={4}
      w={300}
      size="sm"
      borderRadius={5}
      placeholder={label}
      value={value || ""}
      onChange={e => {
        const {value} = e.target
        setValue(value)
        onChangeHandler(value)
      }}
    />
  )
}

export default TableSearch
