import Head from "next/head"
import {useQuery} from "react-query"
import {capitalize} from "@/utils/stringHelpers"
import Layout from "@/layouts/professional/Layout"
import {useAppState} from "@/context/state/Context"
import styles from "@/styles/Professionals.module.sass"

function Professional() {
  const {useProfessionals} = useAppState()
  const {getProfessional} = useProfessionals()
  const {useAuth} = useAppState()
  const {user} = useAuth()
  const {data, isLoading} = useQuery("professional", getProfessional, {retry: false})

  const preLink = to => `professionals/${user.id}/${to}`
  const navLinks = [
    { 
      label: "Portfolio",
      href: preLink("portfolio"), 
    },
    { 
      label: "Services",
      href: "services", 
    }, 
    { href: "connections", label: "Connections" }, 
    { 
      href: "bookings", 
      label: "Bookings" 
    }
  ]
  const userData = data?.included[0]
  const userAttributes = userData?.attributes
  const {
    firstName, 
    lastName,
    region,
    city,
  } = userAttributes ?? {}
  const fullname = capitalize(`${firstName} ${lastName}`)
  const location = `${city}, ${region}, Philippines`
  const img = "https://avatars.dicebear.com/api/male/username.svg" 

  return (
    <main className={styles.main}>
      <Head>
        <title>{fullname} | Professional</title>
      </Head>
      <Layout 
        img={img}
        location={location} 
        navLinks={navLinks}
        fullname={fullname}
        isLoading={isLoading}
      />
    </main>
  )
}

export default Professional

