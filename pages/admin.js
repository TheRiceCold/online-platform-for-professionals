import Head from "next/head"
import AdminLayout from "@/layouts/users/AdminLayout"

const Admin = () => {
  return (
    <main>
      <Head>
        <title>Admin</title>
      </Head>
      <AdminLayout/>
    </main>
  )
}

// export const getStaticProps = async () => {
//   const fetchProfessionals = async() => {
//     const {data} = await Axios("http://localhost:3000/api/professionals")
//     return data
//   }
//
//   const data = await fetchProfessionals()
//    
//   return { props: { data } }
// }

export default Admin
