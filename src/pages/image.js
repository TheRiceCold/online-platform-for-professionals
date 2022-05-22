import Head from "next/head"
import {useState} from "react"
import {storage} from "@/services/firebase"

function Image() {
  const [selected, setSelected] = useState(null)

  const handleFileSelect = e => {
    setSelected(e.target.files[0])
  }

  const handleFileUpload = () => {
    if (!selected) return 
    console.log(selected)
  }

  return (
    <main>
      <Head>Image</Head>
      <h1>Image</h1>
      <input type="file" onChange={handleFileSelect}/>
      <button onClick={handleFileUpload}>upload</button>
    </main>
  )
}

export default Image
