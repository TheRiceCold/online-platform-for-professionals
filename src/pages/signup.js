import Head from "next/head"
import {useState} from "react"
import {useMutation} from "react-query"
import AuthLayout from "@/layouts/auth/layout"
import {useAppState} from "@/context/state/context"

function SignUp() {
  const {useAuth} = useAppState() 
  const [alerts, setAlerts] = useState([])
  const {
    signup, 
    signupInputs,
    SignupResponses
  } = useAuth()
  const responses = new SignupResponses(setAlerts)

  const mutation = useMutation("signup", signup, { 
    onSuccess: responses.onSuccess,
    onError: responses.onError
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

export default SignUp
