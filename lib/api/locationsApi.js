import Axios from "axios"
import {
  removeAttributes,
  renameKey, removeAttr
} from "@/utils/jsonHelpers"

const BASE_URL = "https://ph-locations-api.buonzz.com/v1/"

export const fetchLocations = async() => {
  const {data: {data: cities}} = await Axios(BASE_URL+"cities")
  const {data: {data: regions}} = await Axios(BASE_URL+"regions")

  removeAttr(regions, "href")
  renameKey(cities, "name", "label")
  renameKey(cities, "region_code", "value") // temporary value
  removeAttributes(cities, ["id", "href", "province_code"])

  return regions.map(({id, name}) => {
    const regionCities = cities.filter(city => city.value === id)

    return { 
      label: name, 
      options: regionCities 
    }
  })
}
