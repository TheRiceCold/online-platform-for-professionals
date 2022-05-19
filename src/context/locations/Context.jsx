import Axios from "@/utils/axios"
import {createContext} from "react"
import {useQuery} from "react-query"
// import {useAppState} from "@/context/state/Context"

const LocationsContext = createContext()

const LocationsProvider = ({children}) => {
  // const {useAuth} = useAppState()
  // const {user} = useAuth()
  const {Provider} = LocationsContext

  const {data: cities} = useQuery("cities", async () => {
    const {data} = await Axios.get("cities")
    return data.data
  })

  const {data: regions} = useQuery("regions", async () => { 
    const {data} = await Axios.get("regions")
    return data.data
  })

  return (
    <Provider value={{cities, regions}}>
      {children}
    </Provider>
  )
}

export {
  LocationsContext,
  LocationsProvider,
}
