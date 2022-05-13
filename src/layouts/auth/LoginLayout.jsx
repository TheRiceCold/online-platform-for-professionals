import AuthLayout from "./AuthLayout"
import inputList from "@/constants/forms/loginInputs"
import AuthProvider from "@/context/auth/AuthContext"

const LoginLayout = () => {
  const linkTo = {
    href: "/signup",
    text: "No Account?",
    linkText: "Join now"
  }

  return (
  <AuthProvider isLoginPage>
    <AuthLayout 
      isLoginPage
      linkTo={linkTo}
      heading="Sign In"
      submitValue="Login"
      inputList={inputList}
    />
  </AuthProvider>
  )
}

export default LoginLayout
