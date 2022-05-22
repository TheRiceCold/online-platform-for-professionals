import {initializeApp} from "firebase/app"
import {getStorage} from "firebase/storage"

const config = {
  apiKey: "AIzaSyCJyGXVTQx7uz9-gRogEILQVztCi5G-X0M",
  authDomain: "opfp-ac226.firebaseapp.com",
  projectId: "opfp-ac226",
  storageBucket: "opfp-ac226.appspot.com",
  messagingSenderId: "109669264507",
  appId: "1:109669264507:web:a7d0031bd62433cde446de",
  measurementId: "G-29Y3EW8ZC6"
}

const app = initializeApp(config)
export const storage = getStorage(app)
