import {useContext, createContext} from "react"

import Actions from "./Actions"

const BookingsContext = createContext()

const BookingsProvider = ({children}) => {
  const {Provider} = BookingsContext
  const {user} = useAuth()

  const call = new Actions(user)

  return (
    <Provider value={{ 
      getBookings: call.getAll,
      getBooking: call.getById,
      createBooking: call.create,
      updateBooking: call.update,
      deleteBooking: call.delete
    }}>
      {children}
    </Provider>
  )
}

export default BookingsProvider
export const useBookings = () => useContext(BookingsContext)
