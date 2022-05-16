import {forwardRef, useRef, useEffect} from "react"

const Checkbox = forwardRef(
  ({indeterminate, ...rest}, ref) => {
    const defaultRef = useRef()
    const resolvedRef = ref || defaultRef

    useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate 
    }, [resolvedRef, indeterminate])

    return (
      <input 
        {...rest}
        type="checkbox"
        ref={resolvedRef}
      />
    )
  }
)

export default Checkbox
