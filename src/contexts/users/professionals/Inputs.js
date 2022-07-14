const Inputs = fields => [
  {
    id: "field",
    type: "select",
    label: "Select Field",
    options: fields
  },
  {
    id: "headline",
    label: "Headline"
  },
  {
    id: "license_number",
    label: "License No."
  },
  {
    id: "office_address",
    label: "Office Address"
  }
]

export default Inputs
