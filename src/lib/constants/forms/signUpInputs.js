import regions from "../data/regions"

const SIGNUP_INPUTS = [
  {
    heading: "Create an account",
    inputs: [
      {
        required: true,
        id: "role",
        type: "radio",
        label: "Select Role",
        options: ["client", "professional", "admin"]
      },
      {
        required: true,
        id: "first_name",
        label: "First Name"
      },
      {
        required: true,
        id: "last_name",
        label: "Last Name"
      },
    ]
  },
  {
    heading: "Personal Details",
    inputs: [
      {
        // type: "tel",
        id: "contact_number",
        label: "Phone No."
      },
      { 
        id: "region", 
        type: "select",
        label: "Region",
        label: "Select Region",
        options: regions
      },
      { 
        id: "city", 
        label: "City"
      },
    ]
  },
  {
    heading: "Credentials",
    inputs: [
      {
        required: true,
        id: "email",
        label: "Email",
        autoComplete: "username"
      },
      {
        required: true,
        id: "password",
        type: "password",
        label: "Password",
        autoComplete: "new-password"
      },
      {
        required: true,
        id: "password_confirmation",
        type: "password",
        label: "Password Confirmation",
        autoComplete: "new-password"
      },
    ]
  }
]

export default SIGNUP_INPUTS
