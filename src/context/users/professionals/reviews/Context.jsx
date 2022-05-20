import Actions from "./Actions"

import {createContext} from "react"
import {useAuth} from "@/context/auth/Context"

const ReviewsContext = createContext()

const ReviewsProvider = ({children}) => {
  const {Provider} = ReviewsContext
  const {user} = useAuth()

  const call = new Actions(user) 

  return (
    <Provider value={{
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
