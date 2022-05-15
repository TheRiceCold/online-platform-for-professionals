import Head from "next/head"
import dynamic from "next/dynamic"
import {useRouter} from "next/router"
import {useState, useLayoutEffect} from "react"
import {useAppState} from "@/context/state/context"

// export const getServerSideProps = () => {
// }

const Home = () => {
  const [mounted, setMounted] = useState(false)
  const {useAuth} = useAppState()
  const router = useRouter()
  const {user} = useAuth()

  useLayoutEffect(() => {
    setMounted(true)
  }, [])

  const homeContent = () => {
    let Layout = <h1>Loading</h1>
    switch(user.role) {
      case "professional": 
        Layout = dynamic(() => import("@/layouts/professional/Layout"))
        return <Layout/>
      case "client":
        Layout = dynamic(() => import("@/layouts/client/Layout"))
        return <Layout/>
      case "admin":
        Layout = dynamic(() => import("@/layouts/admin/Layout"))
        return <Layout/>
      default: 
        router.push("login")
    }
  }

  return (
    <main>
      <Head>
        <title>Home</title>
      </Head> 
      {mounted && homeContent()}
    </main>
  )
}

export default Home
