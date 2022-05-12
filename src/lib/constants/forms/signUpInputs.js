import regions from "../data/regions"

const SIGNUP_INPUTS = [
  {
    header: "Select Role",
    inputs: [
      {
        required: true,
        id: "role",
        type: "select",
        label: "Select Role",
        options: ["client", "professional", "admin"]
      }
    ]
  },
  {
    header: "Name",
    inputs: [
      {
        required: true,
        id: "firstname",
        label: "First Name"
      },
      {
        required: true,
        id: "lastname",
        label: "Last Name"
      }
    ]
  },
  {
    header: "Personal Details",
    inputs: [
      {
        type: "tel",
        id: "phoneNo",
        label: "Phone No."
      }
    ]
  },
  {
    header: "Location",
    inputs: [
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
    header: "Credentials",
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
        id: "confirmPassword",
        type: "password",
        label: "Password Confirmation",
        autoComplete: "new-password"
      },
    ]
  }
]

export default SIGNUP_INPUTS
