import {useState} from "react"
import 'regenerator-runtime/runtime'
import {useAsyncDebounce} from "react-table"

const TableSearch = ({filter, setFilter}) => {
  const [value, setValue] = useState(filter)

  const onChangeHandler = useAsyncDebounce(
    value => setFilter(value || ""), 500)

  return (
    <>
      Search: {" "}
      <input 
        value={value || ""}
        onChange={e => {
          const {value} = e.target
          setValue(value)
          onChangeHandler(value)
        }}
      />
    </>
  )
}

export default TableSearch
