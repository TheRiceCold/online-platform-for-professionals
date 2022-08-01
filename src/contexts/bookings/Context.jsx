import { useAuth } from "../auth/Context";
import { useContext, createContext } from "react";

import Actions from "./Actions";

const BookingsContext = createContext();

const BookingsProvider = ({children}) => {
  const { user } = useAuth();
  const call = new Actions(user);

  return (
    <BookingsContext.Provider value={{ 
      getBookings: call.getAll,
      getFilterBookings: call.getByFilter,
      getBooking: call.getById,

      createBooking: call.create,
      updateBooking: call.update,
      deleteBooking: call.delete
    }}>
      {children}
    </BookingsContext.Provider>
  )
}

export default BookingsProvider;
export const useBookings = () => useContext(BookingsContext);
