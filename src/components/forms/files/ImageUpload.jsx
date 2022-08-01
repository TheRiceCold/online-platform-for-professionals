import styles from "~/styles/Components.module.sass";

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "~/lib/services/firebase";
import { useState, useRef } from "react";
import { 
  FormControl,
  Image, 
  Stack, 
  Input, 
  Button, 
} from "@chakra-ui/react";
import { v4 } from "uuid";

function ImageUpload({ input, register, setValue }) {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");

  const handleImageChange = e => {
    if (e.target.files[0])
      setImage(e.target.files[0]);
  };

  const handleSubmit = () => {
    const imageRef = ref(storage, `images/${image.name + v4()}`);

    uploadBytes(imageRef, image)
      .then(() => {
        getDownloadURL(imageRef)
          .then(url => { 
            setUrl(url);
            setValue(input.id, url);
          })
          .catch(error => console.log(error.message));

        setImage(null);
      }).catch(error => console.log(error.message));
  };

  return (
    <>
      <Stack alignItems="center" marginTop={4}>
        <Image src={url} />
        <input 
          id="image"
          type="file" 
          onChange={handleImageChange} 
          className={styles.file_input}
        />
        <label htmlFor="image">Choose an Image</label>
        <Button onClick={handleSubmit}>Upload</Button>
      </Stack>
    </>
  );
}

export default ImageUpload;
