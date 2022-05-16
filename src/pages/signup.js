import Head from "next/head"
import {useState} from "react"
import {useMutation} from "react-query"
import AuthLayout from "@/layouts/auth/layout"
import {useAppState} from "@/context/state/context"

const SignUp = () => {
  const {useAuth} = useAppState() 
  const [alerts, setAlerts] = useState([])
  const {signup, signupInputs} = useAuth()

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
        mutation={mutation}
        inputList={signupInputs}
      />
    </main>
  )
}

// export const getStaticProps = async() => {
//   const data = await fetchLocations()
//   return {props: { locations: data }}
// }

export default SignUp
