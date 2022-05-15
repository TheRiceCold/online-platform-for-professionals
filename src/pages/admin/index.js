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
export default Admin

