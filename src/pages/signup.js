import Head from "next/head"
import {useState} from "react"
import {useMutation} from "react-query"
import {useAuth} from "@/context/auth/context"
import AuthLayout from "@/layouts/auth/layout"
import inputList from "@/constants/forms/signUpInputs"

const SignUp = () => {
  const {signup} = useAuth()
  const [alerts, setAlerts] = useState([])

  const mutation = useMutation("signup", signup, { 
    onError: error => {
      const {status, data} = error?.response
      const messages = data.errors.map(error => error.title)

      if (status === 400) {
        setAlerts(messages.map(message => {
          return { status: "error", message }
        }))
      }
    }, 
    onSuccess: res => {
      console.log(res)
      setAlerts([{ 
        status: "success", 
        message: "Email confirmation has been sent" 
      }])
    }
  })

  return (
    <main>
      <Head>
        <title>Create an Account</title>
      </Head>
      <AuthLayout 
        alerts={alerts}
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
