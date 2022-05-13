import Head from "next/head"
import AuthLayout from "@/layouts/AuthLayout"
import AuthProvider from "@/context/auth/AuthContext"
import inputList from "@/constants/forms/signUpInputs"

const SignUp = () => {
  // console.log(locations)

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
      <AuthProvider>
        <AuthLayout 
          linkTo={linkTo}
          submitValue="Join"
          inputList={inputList}
          heading="Create an Account"
        />
      </AuthProvider>
    </main>
  )
}

// export const getStaticProps = async() => {
//   const data = await fetchLocations()
//   return {props: { locations: data }}
// }

export default SignUp
