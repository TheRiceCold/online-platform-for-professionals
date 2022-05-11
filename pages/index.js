import Head from "next/head"
import {useAuth} from "@/context/AuthContext"
import HomeLayout from "@/layouts/HomeLayout"

const Home = () => {
  const {isUser} = useAuth()
  const title = isUser ? "Home" : "Sign in"

  return (
    <main>
      <Head>
        <title>{title}</title>
      </Head> 
      <HomeLayout/>
    </main>
  )
}

export default Home
