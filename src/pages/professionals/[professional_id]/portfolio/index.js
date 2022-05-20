import Head from "next/head"
import {useUsers} from "@/context/users/Context"
import Layout  from "@/layouts/professional/portfolio/Layout"

function Portfolio() {
  const {fullname} = useUsers("professional")

  return (
    <main>
      <Head>
        <title>{fullname} | Portfolio</title>
      </Head>
      <Layout fullname={fullname}/>
    </main>
  )
}

export default Portfolio
