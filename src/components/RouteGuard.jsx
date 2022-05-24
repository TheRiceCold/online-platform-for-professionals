import {useState} from "react"
import {useRouter} from "next/router"
import useMount from "@/hooks/useMount" 
import {useAuth} from "@/contexts/auth/Context"

const RouteGuard = ({children}) => {
  const router = useRouter()
  const {user: {isAuth}} = useAuth()
  const [authorized, setAuthorized] = useState(false)

  useMount(() => {
    authCheck(router.asPath)

    // on route change start - hide page content by setting authorized to false 
    const hideContent = () => setAuthorized(false)
    router.events.on("routeChangeStart", hideContent)
    // on route change complete - run auth check 
    router.events.on("routeChangeComplete", authCheck)

    // unsubscribe from events in useEffect return function
    return () => {
      router.events.off('routeChangeStart', hideContent)
      router.events.off('routeChangeComplete', authCheck)
    }
  })

  const authCheck = url => {
    // redirect to login page if accessing a private page and not logged in 
    const publicPaths = ["/login", "/signup", "/"]
    const path = url.split("?")[0]

    if (!isAuth && !publicPaths.includes(path)) {
      setAuthorized(false)
      router.push("/login") 
    } else {
      setAuthorized(true)
    }
  }

  return (authorized && children)
}

export default RouteGuard
