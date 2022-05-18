import {z} from "zod"

const Schema = z.object({
  role: z.string(),
  first_name: z.string()
    .min(1, { message: "Firstname can't be empty" }),
  last_name: z.string()
    .min(1, { message: "Lastname can't be empty" }),

  contact_number: z.string().regex(/^(09|\+639)\d{9}$/, 
    {message: "Contact no. must be a valid 09, 639 format"}),
  city: z.string()
    .min(1, { message: "City can't be empty" }),
  region: z.string()
    .min(1, { message: "Region can't be empty" }),

  email: z.string().email(),
  password: z.string().min(8).max(20),
  password_confirmation: z.string()
})
.refine((data) => data.password === data.password_confirmation, {
  message: "Passwords don't match",
  path: ["password_confirmation"], // path of error
})

export default Schema
