import Head from "next/head"
import AdminLayout from "@/layouts/admin/Layout"

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
