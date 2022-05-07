import {
  useState, useEffect,
  useContext, createContext
} from "react"
import axios from "axios"

const LocationContext = createContext({})
export const useLocations = () => useContext(LocationContext)

const LocationsProvider = ({children}) => {
  const BASE_URL = "https://ph-locations-api.buonzz.com/v1/"
  const [cities, setCities] = useState([])
  const [regions, setRegions] = useState([])

  const getLocationsBy = async type => {
    const {data: {data}} = await axios(BASE_URL+type)
    return data
  }

  useEffect(() => {
    (async() => {
      const citiesData = await getLocationsBy("cities")
      const regionsData = await getLocationsBy("regions")
      setCities(citiesData)
      setRegions(regionsData)
    })()
  }, [])
  
  return (
    <LocationContext.Provider value={{regions, cities}}>
      {children}
    </LocationContext.Provider>
  )
}

export default LocationsProvider
