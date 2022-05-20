import Navbar from "@/layouts/navbar/Navbar"
import {useUsers} from "@/context/users/Context"
import {useAppState} from "@/context/state/Context"

function PortfolioLayout(props) {
  const {useAuth} = useAppState()
  const {navLinks} = useUsers("professional")
  const {user} = useAuth()

  return (
    <>
      <Navbar 
        user={user} 
        links={navLinks}
        fullname={props.fullname}
      />
    </>
  )
}


export default PortfolioLayout
