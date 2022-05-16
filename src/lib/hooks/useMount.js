import {useLayoutEffect} from "react"

const useMount = onMount => {
  useLayoutEffect(() => {
    onMount()
  }, [])
}

export default useMount
