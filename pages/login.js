import styles from "@/styles/Auth.module.sass"

import Head from "next/head"
import AuthLayout from "../src/layouts/auth/Layout"

import {useState} from "react"
import {useAuth} from "@/auth_context"
import {useMutation} from "react-query"
import {useStorage} from "@/hooks/useStorage"

function Login() {
	const { 
    login, 
    dispatch, 
    loginInputs, 
    LoginStatuses 
  } = useAuth()
	const storage = useStorage();
	const [alerts, setAlerts] = useState();
	const status = new LoginStatuses(storage, dispatch, setAlerts)

	const mutation = useMutation(login, {
		onSuccess: status.onSuccess,
		onError: status.onError,
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
