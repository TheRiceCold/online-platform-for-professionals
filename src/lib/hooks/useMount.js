import {useLayoutEffect} from "react"

function useMount (onMount) {
  useLayoutEffect(() => onMount(), [])
}

export default useMount
