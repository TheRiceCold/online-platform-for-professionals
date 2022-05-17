import styles from "@/styles/Professionals.module.sass"
import {SearchIcon, CloseIcon} from "@chakra-ui/icons"
import {motion} from "framer-motion"
import {useState} from "react"
import Head from "next/head"

const containerVariants = {
  expanded: {
    height: "20em"
  },
  collapsed: {
    height: "3.8em"
  }
}

function SearchBar() {
  const [isExpanded, setExpanded] = useState(false)
  const animate = isExpanded ? "expanded" : "collapsed"

  return (
    <main>
      <Head>
        <title>Search</title>
      </Head>
      <motion.div
        animate={animate}
        variants={containerVariants}
        className={styles.searchBarContainer}
      >
        <div className={styles.searchInputContainer}>
          <div className={styles.searchIcon}>
            <SearchIcon />
          </div>
          <input 
            placeholder="Search"
            className={styles.searchInput} 
            onFocus={() => setExpanded(true)}
          />
          <div className={styles.closeIcon}>
            <CloseIcon />
          </div>
        </div>
      </motion.div>
    </main>
  )
}

export default SearchBar
