import axios from "axios"
import {useQuery} from "react-query"
import {useContext, createContext} from "react"

const LocationContext = createContext({})
export const useLocations = () => useContext(LocationContext)

const getLocationsBy = async(type) => {
  const BASE_URL = "https://ph-locations-api.buonzz.com/v1/"
  const {data: {data}} = await axios(BASE_URL+type)
  return data
}

const LocationsProvider = ({children, isLoginAuth}) => {
  const {data: regions} = useQuery("regions", 
    () => getLocationsBy("regions"), !isLoginAuth)
  
  regions = regions.map(region => console.log(region.href))
  
  return (
    <LocationContext.Provider value={{regions}}>
      {children}
    </LocationContext.Provider>
  )
}

export default LocationsProvider
