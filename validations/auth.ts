import {z} from "zod";

export const signUpSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(20),
  firstname: z.string(),
  lastname: z.string(),
  // contactNo:
  city: z.string(),
  region: z.string(),
  role: z.string()
})
