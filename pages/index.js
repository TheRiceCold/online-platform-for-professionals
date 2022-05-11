import Head from "next/head"
import {useUser} from "@/context/UserContext"
import HomeLayout from "@/layouts/HomeLayout"

const Home = () => {
  const {user} = useUser()
  const title = user ? "Home" : "Sign in"

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
