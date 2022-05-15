import Head from "next/head"
import {useState} from "react"
import {useMutation} from "react-query"
import AuthLayout from "@/layouts/auth/layout"
import {useAuth} from "@/context/auth/AuthContext"
import inputList from "@/constants/forms/signUpInputs"

const SignUp = () => {
  const {authenticate} = useAuth()
  const [alert, setAlert] = useState()

  const mutation = useMutation("login", 
    data => authenticate("login", data), { 
      onError: error => {
        const {status, data} = error?.response

        if (status === 401) {
          const message = data?.errors[0].title
          setAlert({status: "info", message})
        }

      }, onSuccess: res => {
        
      }
  })

  return (
    <main>
      <Head>
        <title>Create an Account</title>
      </Head>
      <AuthLayout 
        alert={alert}
        submitValue="Join"
        mutation={mutation}
        inputList={inputList}
        heading="Create an Account"
      />
    </main>
  )
}

// export const getStaticProps = async() => {
//   const data = await fetchLocations()
//   return {props: { locations: data }}
// }

export default SignUp
