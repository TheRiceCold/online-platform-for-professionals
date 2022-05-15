import Head from "next/head"
import {useLayoutEffect, useState} from "react"
import {useRouter} from "next/router"
import {useMutation} from "react-query"
import AuthLayout from "@/layouts/AuthLayout"
import {useStorage} from "@/hooks/useStorage"
import {useAuth} from "@/context/auth/AuthContext"
import inputList from "@/constants/forms/loginInputs"

const Login = () => {
  const linkTo = {
    href: "/signup",
    text: "No Account?",
    linkText: "Join now"
  }
  const router = useRouter()
  const storage = useStorage()
  const [alert, setAlert] = useState()
  const {authenticate, isLoggedIn} = useAuth()

  const mutation = useMutation("login", 
    data => authenticate("login", data), { 
      onError: error => {
        const {status, data} = error?.response

        if (status === 401) {
          const message = data?.error
          setAlert({status: "info", message})
        }
      }, onSuccess: res => {
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
  
  useLayoutEffect(() => {
    if (isLoggedIn) router.push("/")
  }, [])

  return (
    <main>
      <Head>
        <title>Login</title>
      </Head>
      {!isLoggedIn && 
        <AuthLayout 
          isLoginPage
          alert={alert}
          linkTo={linkTo}
          heading="Sign In"
          mutation={mutation}
          submitValue="Login"
          inputList={inputList}
        />
      }
    </main>
  )
}

export default Login 
