import {useLayoutEffect} from "react"

const useMount = (onMount, onUnMount) => {
  useLayoutEffect(() => {
    if (typeof onMount === "function") onMount()
    if (typeof onUnMount === "function") return onUnMount
  }, [onMount, onUnMount])
}

export default useMount
