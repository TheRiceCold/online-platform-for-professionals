import {z} from "zod"

// MUST HAVE THE SAME NAME AS THE INPUT IDS
const schema = z.object({
  field: z.string(),
  headline: z.string(),
  license_number: z.string(),
  office_address: z.string(),
})

export {schema}
