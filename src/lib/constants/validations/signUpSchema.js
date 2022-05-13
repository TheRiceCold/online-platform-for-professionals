import {z} from "zod"

// MUST HAVE THE SAME NAME AS THE INPUTS
export const signUpSchema = z.object({
  role: z.string(),
  first_name: z.string(),
  last_name: z.string(),

  // contact_number: z.number().min(11),
  city: z.string(),
  region: z.string(),

  email: z.string().email(),
  password: z.string().min(8).max(20),
})
