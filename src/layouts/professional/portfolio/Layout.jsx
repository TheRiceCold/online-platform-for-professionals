import Navbar from "../navbar/Navbar"
import {useAppState} from "@/context/state/Context"

function PortfolioLayout(props) {
  const {useAuth} = useAppState()
  const {user} = useAuth()

  return (
    <>
      <Navbar 
        user={user} 
        fullname={props.fullname}
      />
    </>
  )
}


export default PortfolioLayout
