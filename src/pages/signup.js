import styles from "@/styles/Auth.module.sass"

import Head from "next/head"
import {useState} from "react"
import AuthLayout from "@/layouts/auth/layout"
import {useMutation, useQueries} from "react-query"
import {useAppState} from "@/context/state/Context"

function SignUp() {
  const {useAuth, useLocations} = useAppState() 
  const [alerts, setAlerts] = useState([])
  const {
    getCities,
    getRegions
  } = useLocations()
  const {
    signup, 
    signupInputs,
    SignupStatuses
  } = useAuth()

  const [
    {data: cities}, 
    {data: regions}
  ] = useQueries([
    { 
      queryKey: "cities", 
      queryFn: getCities 
    }, 
    { 
      queryKey: "regions", 
      queryFn: getRegions
    }
  ])

  const inputs = signupInputs(regions, cities)

  const status = new SignupStatuses(setAlerts)
  
  const mutation = useMutation(signup, { 
    onSuccess: status.onSuccess,
    onError: status.onError
  })

  return (
    <main className={styles.main}>
      <Head>
        <title>Create an Account</title>
      </Head>
      <AuthLayout 
        alerts={alerts}
        inputs={inputs}
        mutation={mutation}
      />
    </main>
  )
}

export default SignUp
