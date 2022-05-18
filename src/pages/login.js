import styles from "@/styles/Auth.module.sass"

import Head from "next/head"
import {useState} from "react"
import {useMutation} from "react-query"
import {useStorage} from "@/hooks/useStorage"
import AuthLayout from "@/layouts/auth/layout"
import {useAppState} from "@/context/state/Context"

function Login() {
  const storage = useStorage()
  const {useAuth} = useAppState()
  const {
    login, 
    dispatch, 
    loginInputs,
    LoginStatuses,
  } = useAuth()
  const [alerts, setAlerts] = useState()
  const status = new LoginStatuses(storage, dispatch, setAlerts)

  const mutation = useMutation(login, { 
    onSuccess: status.onSuccess,
    onError: status.onError
  })

  return (
    <main className={styles.main}>
      <Head>
        <title>Login</title>
      </Head>
      <AuthLayout 
        isLoginPage
        alerts={alerts}
        mutation={mutation}
        inputs={loginInputs}
      />
    </main>
  )
}

export default Login 
