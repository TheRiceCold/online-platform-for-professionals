import {useEffect, useState} from "react"

const PREFIX = "OPFP:"

const useStorage = (type= "local", key, initValue) => {
  const storage = window[type+"Storage"]
  key = PREFIX + key

  const [value, setValue] = useState(() => {
    const jsonValue = storage.getItem(key)  

    if (jsonValue !== null) return JSON.parse(jsonValue)

    if (typeof initValue === "function") 
      return initValue()
    else 
      return initValue
  })

  useEffect(() => storage.setItem(key, JSON.stringify(value)), [key, value])
  return [value, setValue]
}

export default useStorage
