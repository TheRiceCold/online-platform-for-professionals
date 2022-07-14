import Select from "react-select"
import {Heading} from "@chakra-ui/react"

const GroupSelectInput = ({options, label}) => (
  <>
    <Heading 
      mt={4} 
      mb={2} 
      size="4x1" 
      color="gray.700"
    >
      {label}{" "}
      <span style={{color: "red"}}>*</span>
    </Heading>
    <Select 
      options={options}
      getOptionValue={(option) => option.value}
    />
  </>
)

export default GroupSelectInput
