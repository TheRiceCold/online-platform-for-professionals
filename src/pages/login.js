import Head from "next/head"
import {useState} from "react"
import {useMutation} from "react-query"
import {useStorage} from "@/hooks/useStorage"
import AuthLayout from "@/layouts/auth/layout"
import {useAppState} from "@/context/state/context"
import inputList from "@/constants/forms/loginInputs"

const Login = () => {
  const storage = useStorage()
  const {useAuth} = useAppState()
  const {login, dispatch} = useAuth()
  const [alerts, setAlerts] = useState()

  const mutation = useMutation("login", login, { 
    onError: error => {
      const {status, data} = error?.response
      const message = data?.error

      if (status === 401) 
        setAlerts([{status: "error", message}])
    }, 
    onSuccess: res => {
      const {id, attributes} = res.data.data
      const token = res.headers.authorization
      const data = {
        id: id,
        token: token, 
        isAuth: true,
        role: attributes.role,
      }

      // TODO: set to local if remember me is true
      dispatch({type: "LOGIN", payload: data})
      storage.setItem({
        type: "session", 
        key: "auth_data",
        value: JSON.stringify(data)
      })

      location.reload()
    }
  })

  return (
    <main>
      <Head>
        <title>Login</title>
      </Head>
        <AuthLayout 
          isLoginPage
          alerts={alerts}
          heading="Sign In"
          mutation={mutation}
          submitValue="Login"
          inputList={inputList}
        />
    </main>
  )
}

export default Login 
