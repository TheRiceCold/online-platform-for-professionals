import {isBrowser} from "@/utils/browserHelpers"

const useStorage = () => {
  const PREFIX = "_opfp_"
  const storageType = type => `${type ?? "local"}Storage`

  const setItem = ({type, key, value}) => {
    if (isBrowser)
      window[storageType(type)].setItem(PREFIX+key, value)
  }

  const getItem = ({type, key}) => 
    isBrowser ? window[storageType(type)].getItem(PREFIX+key) : "[]"

  const removeItem = ({type, key}) => 
    window[storageType(type)].removeItem(PREFIX+key)

  return {setItem, getItem, removeItem}
}

export {useStorage}
