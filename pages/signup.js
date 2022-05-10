import Head from "next/head"
import {fetchLocations} from "@/api/locationsApi"
import AuthLayout from "@/layouts/auth/AuthLayout"
import {signUpInputs} from "@/constants/auth/signUpInputs"

const SignUp = ({locations}) => {
  console.log(locations)

  const linkTo = {
    href: "/",
    linkText: "Sign in",
    text: "Already have an account?",
  }

  return (
    <main>
      <Head>
        <title>Create an Account</title>
      </Head>
      <AuthLayout 
        linkTo={linkTo}
        submitValue="Join"
        inputList={signUpInputs}
        heading="Create an Account"
      />
    </main>
  )
}

export const getStaticProps = async() => {
  const data = await fetchLocations()
  return {props: { locations: data }}
}

export default SignUp
