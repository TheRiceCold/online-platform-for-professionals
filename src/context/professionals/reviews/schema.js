import {z} from "zod"

// MUST HAVE THE SAME NAME AS THE INPUT IDS
const Schema = z.object({
  rating: z.number(),
  body: z.string(),
})

export default Schema
