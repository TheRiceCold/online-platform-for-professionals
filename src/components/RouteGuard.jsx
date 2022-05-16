import {useState} from "react"
import {useRouter} from "next/router"
import useMount from "@/hooks/useMount" 
import {useAppState} from "@/context/state/context"

const RouteGuard = ({children}) => {
  const [authorized, setAuthorized] = useState(false)
  const {useAuth} = useAppState()
  const router = useRouter()
  const {user} = useAuth()

  useMount(() => authCheck(router.asPath))

  const authCheck = url => {
    // redirect to login page if accessing a private page and not logged in 
    const publicPaths = ["/login", "/signup"]
    const path = url.split("?")[0]

    if (!user.isAuth && !publicPaths.includes(path)) {
      router.push("/login") 
      setAuthorized(false)
    } 
    else setAuthorized(true)
  }

  return (authorized && children)
}

export default RouteGuard
