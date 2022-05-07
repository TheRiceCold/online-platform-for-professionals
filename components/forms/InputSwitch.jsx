import TextInput from "./TextInput"
import PhoneInput from "./PhoneInput"
import SelectInput from "./SelectInput"
import PasswordInput from "./PasswordInput"

const InputSwitch = ({input, register}) => {
  const {id, type, label} = input
  const isEmail = (type === "email")

  switch (type) {
    case "tel":
      return (
        <PhoneInput
          id={id}
          label={label}
          register={register}
        />
      )

    case "password": 
      return (
      <PasswordInput
        id={id} 
        isLoginAuth
        label={label}
        register={register}
      />
    )

    case "select": 
      return (
        <SelectInput
          id={id}
          input={input}
          register={register}
        />
      )

    default:
      return (
        <TextInput
          id={id}
          isEmail
          label={label}
          register={register}
        />
      )
  }
}

export default InputSwitch
