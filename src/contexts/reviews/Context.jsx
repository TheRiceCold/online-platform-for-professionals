import Inputs from "./Inputs";
import Schema from "./Schema";
import Actions from "./Actions";

import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../auth/Context";
import { createContext } from "react";

const ReviewsContext = createContext();

const ReviewsProvider = ({ children }) => {
  const { user } = useAuth();
  const call = new Actions(user);

  return (
    <ReviewsContext.Provider value={{
      inputs: Inputs,
      resolver: zodResolver(Schema),

      getReviews: call.getAll,
      getReview: call.getById,
      createReview: call.create,
      updateReview: call.update,
      deleteReview: call.delete,
    }}>
      {children}
    </ReviewsContext.Provider>
  );
}

export default ReviewsProvider;
