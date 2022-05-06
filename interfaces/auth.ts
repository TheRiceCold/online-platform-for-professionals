type Role = "client" | "professional" | "admin"

export interface ISignUpForm {
  email: string
  password: string
  firstname: string
  lastname: string
  // contactNo: number
  city: string
  region: string
  role: Role
}

export interface ISignInForm {
  email: string
  password: string
}
