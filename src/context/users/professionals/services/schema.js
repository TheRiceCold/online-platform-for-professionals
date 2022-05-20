import {z} from "zod"

// MUST HAVE THE SAME NAME AS THE INPUT IDS
const Schema = z.object({
  title: z.string(),
  details: z.string(),
  min_price: z.number(),
  max_price: z.string(),
})

export default Schema
