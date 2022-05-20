import Axios from "@/utils/axios"
import {createContext} from "react"

const LocationsContext = createContext()

const LocationsProvider = ({children}) => {
  const {Provider} = LocationsContext

  const getCities = async () => {
    const {data: cities} = await Axios.get("cities")
    const data = cities.map(city => {
      return {
        id: city.id,
        label: city.name,
        regionId: city.region_code
      }
    }) 
    return data
  }

  const getRegions = async () => { 
    const {data: regions} = await Axios.get("regions")
    const data = regions.map(region => {
      return { 
        value: region.id, 
        label: region.name 
      }
    })

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
