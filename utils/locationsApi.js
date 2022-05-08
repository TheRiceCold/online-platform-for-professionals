import Axios from "axios"
import {removeAttr, removeAttributes} from "./jsonHelpers"

const BASE_URL = "https://ph-locations-api.buonzz.com/v1/"

export const fetchLocations = async() => {
  const {data: {data: cities}} = await Axios(BASE_URL+"cities")
  const {data: {data: regions}} = await Axios(BASE_URL+"regions")

  removeAttr(regions, "href")
  removeAttributes(cities, ["id", "href", "province_code"])

  return regions.map(({id, name}) => {
    const regionCities = cities.filter(city => city.region_code === id)

    return { 
      label: name, 
      cities: regionCities 
    }
  })
}
