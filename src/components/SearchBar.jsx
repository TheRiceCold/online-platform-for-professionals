import styles from "@/styles/Professionals.module.sass"

import {SearchIcon, CloseIcon} from "@chakra-ui/icons"
import {motion, AnimatePresence} from "framer-motion"
import useClickOutside from "@/hooks/useClickOutside"
import ClipLoader from "react-spinners/ClipLoader"
import {useState, useRef} from "react"

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
  const animate = isExpanded ? "expanded" : "collapsed"

  const handleClose = () => {
    setExpanded(false)
    inputRef.current.value =""
  }
  useClickOutside(ref, () => setExpanded(false))

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
        <div className={styles.loadingWrapper}>
          <ClipLoader/>
        </div>
      </div>
    </motion.div>
  )
}

export default SearchInput
