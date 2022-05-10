import {useContext, createContext} from "react"

const StorageContext = createContext({})
const useStorage = () => useContext(StorageContext)

const StorageProvider = ({children}) => {
  const PREFIX = "OPFP:"

  const setStorage = ({type, key, value}) => {
    type || "local"
    window[type+"Storage"].setItem(PREFIX+key, value)
  }

  const getStorage = ({type, key}) => {
    type || "local"
    const value = window[type+"Storage"].getItem(PREFIX+key)
    return value
  }

  const isStorageKeyExist = ({type, key}) => {
    type || "local"
    if (window[type+"Storage"].getItem(PREFIX+key))
      return true
  }

  return (
    <StorageContext.Provider value={{
      setStorage, getStorage, isStorageKeyExist
    }}>
      {children}
    </StorageContext.Provider>
  )
}

export {useStorage}
export default StorageProvider
