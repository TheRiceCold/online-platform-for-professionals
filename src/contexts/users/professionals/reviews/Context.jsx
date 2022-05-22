import Inputs from "./Inputs"
import Schema from "./Schema"
import Actions from "./Actions"

import {createContext} from "react"
import {useAuth} from "@/contexts/auth/Context"
import {zodResolver} from "@hookform/resolvers/zod"

const ReviewsContext = createContext()

const ReviewsProvider = ({children}) => {
  const {Provider} = ReviewsContext
  const {user} = useAuth()

  const call = new Actions(user) 

  return (
    <Provider value={{
      inputs: Inputs,
      resolver: zodResolver(Schema),

      getReviews: call.getAll,
      getReview: call.getById,
      createReview: call.create,
      updateReview: call.update,
      deleteReview: call.delete,
    }}>
      {children}
    </Provider>
  )
}

export default ReviewsProvider
