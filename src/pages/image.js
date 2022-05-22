import Head from "next/head"

import {v4} from "uuid"
import {useState} from "react"
import {storage} from "@/firebase"
import {Avatar} from "@chakra-ui/react"
import {ref, uploadBytes, getDownloadURL} from "firebase/storage"

function Image() {
  const [image, setImage] = useState(null)
  const [url, setUrl] = useState(null)

  const handleImageChange = e => {
    if (e.target.files[0]) {
      setImage(e.target.files[0])
    }
  }

  const handleSubmit = () => {
    const imageRef = ref(storage, `images/${image.name + v4()}`)

    uploadBytes(imageRef, image)
    .then(() => {
      getDownloadURL(imageRef)
      .then(url => setUrl(url))
      .catch(error => console.log(error.message))
  
      setImage(null)
    }).catch((error) => console.log(error.message))

  }

  return (
    <main>
      <Head>Image</Head>
      <Avatar src={url} />
      <input type="file" onChange={handleImageChange}/>
      <button onClick={handleSubmit}>Upload</button>
    </main>
  )
}

export default Image
