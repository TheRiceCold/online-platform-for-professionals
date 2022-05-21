import Axios from "@/utils/axios"
import {useContext, createContext} from "react"

const HelpersContext = createContext()

const HelpersProvider = ({children}) => {
  const {Provider} = HelpersContext

  const getCities = async() => {
    const {data: cities} = await Axios("cities")
    return cities.map(city => {
      return {
        id: city.id,
        label: city.name,
        regionId: city.region_code
      }
    }) 
  }

  const getRegions = async() => { 
    const {data: regions} = await Axios("regions")
    return regions.map(region => {
      return { 
        value: region.id, 
        label: region.name 
      }
    })
  }

  const getFields = async() => {
    const {data: fields} = await Axios("fields")
    return fields.map(field => {
      return {
        value: field.id,
        label: field.name
      }
    })
  }

  return (
    <Provider value={{getRegions, getCities, getFields}}>
      {children}
    </Provider>
  )
}

export default HelpersProvider
export const useHelpers= () => useContext(HelpersContext)
