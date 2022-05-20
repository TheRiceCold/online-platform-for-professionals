const Inputs = (regions, cities) => [
  {
    heading: "Create an account",
    inputs: [
      {
        id: "role",
        type: "radio",
        label: "Select Role",
        options: ["client", "professional", "admin"]
      },
      {
        id: "first_name",
        label: "First Name"
      },
      {
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
        label: "Select Region",
        options: regions
      },
      { 
        id: "city", 
        type: "select",
        label: "Select City",
        options: cities
      },
    ]
  },
  {
    heading: "Credentials",
    inputs: [
      {
        id: "email",
        label: "Email",
        autoComplete: "username"
      },
      {
        id: "password",
        type: "password",
        label: "Password",
        autoComplete: "new-password"
      },
      {
        id: "password_confirmation",
        type: "password",
        label: "Password Confirmation",
        autoComplete: "new-password"
      },
    ]
  }
]

export default Inputs
