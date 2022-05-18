import styles from "@/styles/Professionals.module.sass"

import Axios from "axios"
import {useQuery} from "react-query"
import {useState, useRef} from "react"
import useDebounce from "@/hooks/useDebounce"
import ClipLoader from "react-spinners/ClipLoader"
import useClickOutside from "@/hooks/useClickOutside"
import {motion, AnimatePresence} from "framer-motion"
import {SearchIcon, CloseIcon} from "@chakra-ui/icons"

const containerVariants = {
  expanded: {
    height: "20em"
  },
  collapsed: {
    height: "3.8em"
  }
}

function SearchInput() {
  const ref = useRef()
  const inputRef = useRef()
  const [isExpanded, setExpanded] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const animate = isExpanded ? "expanded" : "collapsed"

  const handleChange = e => {
    e.preventDefault()
    setSearchQuery(e.target.value)
  }

  const debouncedSearchQuery = useDebounce(searchQuery)

  const handleClose = () => {
    setExpanded(false)
    inputRef.current.value =""
  }

  useClickOutside(ref, () => setExpanded(false))

  const prepSearchQuery = query => {
    const uri = `http://api.tvmaze.com/search/shows?q=${query}`
    return encodeURI(uri)
  }

  const getSomething = async() => {
    if(!searchQuery || searchQuery.trim() === "")
      return

    const URL = prepSearchQuery(searchQuery)

    const {data} = await Axios.get(URL)
    return data
  }

  const {data, isLoading} = useQuery(
    "something", getSomething, {
      enabled: debouncedSearchQuery === searchQuery
    }
  )

  console.log("Result: ", data)

  return (
    <motion.div
      ref={ref}
      animate={animate}
      variants={containerVariants}
      className={styles.searchBarContainer}
    >
      <div className={styles.searchInputContainer}>
        <div className={styles.searchIcon}>
          <SearchIcon />
        </div>
        <input 
          ref={inputRef}
          placeholder="Search"
          onChange={handleChange}
          className={styles.searchInput} 
          onFocus={() => setExpanded(true)}
        />
        <AnimatePresence>
          {isExpanded && (
            <motion.span 
              key="close-icon"
              onClick={handleClose}
              className={styles.closeIcon}
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <CloseIcon/>
            </motion.span>
          )}
        </AnimatePresence>
      </div>
      <span className={styles.lineSeparator}/>
      <div className={styles.searchContent}>
        {isLoading && (
          <div className={styles.loadingWrapper}>
            <ClipLoader/>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default SearchInput
