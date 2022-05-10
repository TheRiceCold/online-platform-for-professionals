const useStorage = () => {
  const PREFIX = "_opfp_"
  const isBrowser = (() => typeof window !== "undefined")
  const storageType = type => `${type ?? "local"}Storage`

  const setItem = ({type, key, value}) => {
    window[storageType(type)].setItem(PREFIX+key, value)
  }

  const getItem = ({type, key}) => {
    const value = window[storageType(type)].getItem(PREFIX+key)
    return isBrowser ? value : ""
  }

  const removeItem = ({type, key}) => {
    window[storageType(type)].removeItem(PREFIX+key)
  }

  return {setItem, getItem, removeItem}
}

export {useStorage}
