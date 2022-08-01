import Link from "~/components/navigation/Link";
import { Text } from "@chakra-ui/react";

function Links({ isLoginPage }) {
  const href = isLoginPage ? "/signup" : "/login";
  const linkText = isLoginPage ? "Join now" : "Sign in";
  const labelText = isLoginPage ? "No Account?" : "Already have an account?";

  return (
    <Text mt={4} mt={4}>
      {labelText} {" "}
      <Link to={href}>
        {linkText}
      </Link>
    </Text>
  );
}

export default Links;
