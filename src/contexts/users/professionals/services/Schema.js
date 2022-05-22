import {z} from "zod"

// MUST HAVE THE SAME NAME AS THE INPUT IDS
const Schema = z.object({
  title: z.string()
    .min(1, { message: "Title can't be empty"}),
  details: z.string()
    .min(1, { message: "Details can't be empty"}),
  min_price: z.string()
    .min(1, { message: "Minimum required"}),
  max_price: z.string()
    .min(1, { message: "Maximum required"}),
})

export default Schema