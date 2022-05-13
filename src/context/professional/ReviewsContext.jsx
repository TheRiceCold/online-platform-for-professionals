import {useContext, createContext} from "react"

const ReviewsContext = createContext({})

const ReviewsProvider = ({children}) => {

  return (
    <ReviewsContext.Provider>
      {children}
    </ReviewsContext.Provider>
  )
}

export const useReviews = () => {
  useContext(ReviewsContext)
}

export default ReviewsContext
