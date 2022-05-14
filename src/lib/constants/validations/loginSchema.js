import {z} from "zod"

export const loginSchema = z.object({
  email: z.string().email().min(1, 
    { message: "Email can't be empty" }),

  password: z.string().min(1, 
    { message: "Password can't be empty" }),
})
