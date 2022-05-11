import regions from "../data/regions"

const SIGNUP_INPUTS = [
  {
    required: true,
    id: "role",
    type: "select",
    label: "Select Role",
    options: ["client", "professional", "admin"]
  },
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

export default SIGNUP_INPUTS
