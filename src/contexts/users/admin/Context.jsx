import UserTable from "./userTable"

import {createContext} from "react"
import {navLinks} from "./navLinks"
import {useRouter} from "next/router"
import fakeUsers from "./fakeUsers.json"
import {userMenuItems} from "./menuItems"
import {useAuth} from "../../auth/Context"

const AdminContext = createContext()

const AdminProvider = ({children}) => {
  const {Provider} = AdminContext

  const {user, logout} = useAuth()
  const router = useRouter()

  const menuItems = openSettings => 
    userMenuItems(user, router, logout, openSettings)

  return (
    <Provider value={{
      menuItems,
      navLinks: navLinks(user.id),

      fakeUsers,
      userTable: UserTable,
    }}>
      {children}
    </Provider>
  )
}

export {
  AdminContext,
  AdminProvider,
}
