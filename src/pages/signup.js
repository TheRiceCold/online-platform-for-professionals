import Head from "next/head"
import {useState} from "react"
import {useMutation} from "react-query"
import AuthLayout from "@/layouts/auth/layout"
import {useAppState} from "@/context/state/Context"

function SignUp() {
  const {useAuth} = useAppState() 
  const [alerts, setAlerts] = useState([])
  const {
    signup, 
    signupInputs,
    SignupStatuses
  } = useAuth()
  const status = new SignupStatuses(setAlerts)

  const mutation = useMutation("signup", signup, { 
    onSuccess: status.onSuccess,
    onError: status.onError
  })

  return (
    <main>
      <Head>
        <title>Create an Account</title>
      </Head>
      <AuthLayout 
        alerts={alerts}
        mutation={mutation}
        inputs={signupInputs}
      />
    </main>
  )
}

export default SignUp
