import FormControl from "./FormControl"

const InputMap = props => {
  const {errors, register, inputList} = props

  return (
    <> 
      {
        inputList.map(obj => {
          const isGrouped = obj.hasOwnProperty("inputs")

          if (isGrouped) {
            return obj.inputs.map(input => (
              <FormControl 
                input={input}
                key={input.id}
                register={register}
                error={errors[input.id]}
              /> 
            ))
          }

          return (
            <FormControl 
              input={obj}
              key={obj.id}
              register={register}
              error={errors[obj.id]}
            /> 
          )
        })
      }
    </>
  )
}

export default InputMap
