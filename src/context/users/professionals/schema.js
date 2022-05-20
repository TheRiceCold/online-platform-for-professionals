import {z} from "zod"

// MUST HAVE THE SAME NAME AS THE INPUT IDS
const Schema = z.object({
  field: z.string()
    .min(1, { message: "Field can't be empty" }),

  headline: z.string()
    .min(1, { message: "Headline can't be empty" }),
  license_number: z.string().min(7).max(7),
  office_address: z.string()
    .min(1, { message: "Office address can't be empty" }),
})

export default Schema
