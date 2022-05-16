import {z} from "zod"

// MUST HAVE THE SAME NAME AS THE INPUT IDS
const Schema = z.object({
  title: z.string(),
  details: z.string(),
})

export default Schema
