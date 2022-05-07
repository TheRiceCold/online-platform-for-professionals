export const signUpInputs = [
  {
    required: true,
    id: "firstname",
    label: "First Name"
  },
  {
    required: true,
    id: "lastname",
    label: "Last Name"
  },
  {
    required: true,
    id: "email",
    label: "Email"
  },
  {
    type: "tel",
    id: "phoneNo",
    label: "Phone No."
  },
  {
    required: true,
    id: "password",
    type: "password",
    label: "Password"
  },
  {
    required: true,
    id: "confirmPassword",
    type: "password",
    label: "Password Confirmation"
  },
  {
    id: "city",
    label: "City"
  },
  {
    id: "region",
    label: "Region"
  },
  {
    required: true,
    id: "role",
    type: "select",
    label: "Select Role",
    options: ["client", "professional", "admin"]
  }
]

export const loginInputs = [
  {
    required: true,
    id: "email",
    label: "Email"
  },
  {
    required: true,
    id: "password",
    type: "password",
    label: "Password"
  }
]
