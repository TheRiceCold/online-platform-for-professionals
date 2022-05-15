import {Text} from "@chakra-ui/react"
import Link from "@/components/navigation/Link"

const Links = ({isLoginPage}) => {
  const href = isLoginPage ? "/signup" : "/login"
  const linkText = isLoginPage ? "Join now" : "Sign in"
  const labelText = isLoginPage ? 
    "No Account?" : "Already have an account?"

  return (
    <Text mt={8}>
      {labelText} {" "}
      <Link to={href} color="teal">
        {linkText}
      </Link>
    </Text>
  )
}

export default Links
