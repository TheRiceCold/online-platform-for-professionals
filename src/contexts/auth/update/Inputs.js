const Inputs = (regions, cities) => [
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
  {
    id: "email",
    label: "Email",
    autoComplete: "username"
  }
]

export default Inputs
