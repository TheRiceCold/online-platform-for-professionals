import {z} from "zod"

// MUST HAVE THE SAME NAME AS THE INPUT IDS
const Schema = {
  login: z.object({
    email: z.string().email().min(1, 
      { message: "Email can't be empty" }),

    password: z.string().min(1, 
      { message: "Password can't be empty" }),
  }),

  signup: z.object({
    role: z.string(),
    first_name: z.string(),
    last_name: z.string(),

    contact_number: z.string().regex(/^(09|\+639)\d{9}$/, 
      {message: "Contact no. must be a valid 09, 639 format"}),
    city: z.string(),
    region: z.string(),

    email: z.string().email(),
    password: z.string().min(8).max(20),
    password_confirmation: z.string()
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "Passwords don't match",
    path: ["password_confirmation"], // path of error
  })
}

export default Schema
