import MultiForm from "./MultiForm"
import FormControl from "./FormControl"

const InputMap = props => {
  const isGrouped = props.inputList[0].hasOwnProperty("inputs")

  if (isGrouped) return <MultiForm {...props}/>

  return (
  <>
    {props.inputList.map(obj => (
      <FormControl 
        input={obj}
        key={obj.id}
        register={props.register}
        error={props.errors[obj.id]}
      /> 
    ))}
  </>
  )
}

export default InputMap
