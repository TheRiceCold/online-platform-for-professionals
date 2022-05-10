import AuthLayout from "./AuthLayout"
import AuthProvider from "@/context/AuthContext"
import inputList from "@/constants/auth/loginInputs"

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
