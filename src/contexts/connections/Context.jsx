import { useContext, createContext } from "react";
import { useAuth } from "../auth/Context";

import Actions from "./Actions";

const ConnectionsContext = createContext();

const ConnectionsProvider = ({ children }) => {
  const {user} = useAuth();
  const call = new Actions(user);

  return (
    <ConnectionsContext.Provider value={{ 
      createConnection: call.create,
      getSubscribers: call.getSubscribers,
      getClientele: call.getClientele,
      getSubscriptions: call.getSubscriptions,
      getMyProfessionals: call.getMyProfessionals,
      deleteConnection: call.delete
    }}>
      {children}
    </ConnectionsContext.Provider>
  );
}

export default ConnectionsProvider;
export const useConnections = () => useContext(ConnectionsContext);
