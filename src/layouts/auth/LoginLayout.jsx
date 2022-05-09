import AuthLayout from "./AuthLayout"
import inputList from "@/constants/auth/loginInputs"

const LoginLayout = () => {
  const linkTo = {
    href: "/signup",
    text: "No Account?",
    linkText: "Join now"
  }

  return (
    <AuthLayout 
      isLoginPage
      linkTo={linkTo}
      heading="Sign In"
      submitValue="Login"
      inputList={inputList}
    />
  )
}

export default LoginLayout
