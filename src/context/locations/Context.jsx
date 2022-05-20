import Axios from "@/utils/axios"
import {createContext} from "react"

const LocationsContext = createContext()

const LocationsProvider = ({children}) => {
  const {Provider} = LocationsContext

  const getCities = async () => {
    const {data} = await Axios.get("cities")
    return data
  }

  const getRegions = async () => { 
    const {data} = await Axios.get("regions")
    return data
  }

  return (
    <Provider value={{getRegions, getCities}}>
      {children}
    </Provider>
  )
}

export {
  LocationsContext,
  LocationsProvider,
}
