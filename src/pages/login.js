import Head from "next/head"
import {useState} from "react"
import {useMutation} from "react-query"
import {useStorage} from "@/hooks/useStorage"
import AuthLayout from "@/layouts/auth/layout"
import {useAuth} from "@/context/auth/AuthContext"
import inputList from "@/constants/forms/loginInputs"

const Login = () => {
  const storage = useStorage()
  const {authenticate} = useAuth()
  const [alert, setAlert] = useState()

  const mutation = useMutation("login", 
    data => authenticate("login", data), { 
      onError: error => {
        const {status, data} = error?.response

        if (status === 401) 
          setAlert({status: "error", text: data?.error})
      }, 
      onSuccess: res => {
        const {data} = res.data
        const token = res.headers.authorization

        // TODO: set to local if remember me is true
        storage.setItem({
          type: "session", 
          key: "auth_data",
          value: JSON.stringify({
            token: token,
            id: data.id,
            role: data.attributes.role,
          })
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
          alert={alert}
          heading="Sign In"
          mutation={mutation}
          submitValue="Login"
          inputList={inputList}
        />
    </main>
  )
}

export default Login 
