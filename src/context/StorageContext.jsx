import {useContext, createContext} from "react"

const StorageContext = createContext({})
const useStorage = () => useContext(StorageContext)

const StorageProvider = ({children}) => {
  const PREFIX = "OPFP:"

  const setStorage = ({type, key, value}) => {
    type || "local"
    window[type+"Storage"].setItem(key, value)
  }

  const getStorage = key => {

  }

  return (
    <StorageContext.Provider value={{setStorage, getStorage}}>
      {children}
    </StorageContext.Provider>
  )
}

export {useStorage}
export default StorageProvider
