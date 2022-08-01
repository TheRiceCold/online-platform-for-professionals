import styles from "~/styles/Components.module.sass";

import {SearchIcon, CloseIcon} from "@chakra-ui/icons";
import {motion, AnimatePresence} from "framer-motion";
import {useState, useRef} from "react";
import {useQuery} from "react-query";

import useClickOutside from "~/lib/hooks/useClickOutside";
import ClipLoader from "react-spinners/ClipLoader";
import useDebounce from "~/lib/hooks/useDebounce";
import Axios from "axios";

const containerVariants = {
  expanded: { height: "16em" },
  collapsed: { height: "2em" }
};

function SearchInput({ colorMode }) {
  const ref = useRef();
  const inputRef = useRef();
  const [isExpanded, setExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const animate = isExpanded ? "expanded" : "collapsed";

  const handleChange = e => {
    e.preventDefault()
    setSearchQuery(e.target.value)
  };

  const debouncedSearchQuery = useDebounce(searchQuery);

  const handleClose = () => {
    setExpanded(false)
    inputRef.current.value =""
  };

  useClickOutside(ref, () => setExpanded(false));

  const prepSearchQuery = query => {
    const uri = `http://api.tvmaze.com/search/shows?q=${query}`;
    return encodeURI(uri);
  };

  const getSomething = async() => {
    if(!searchQuery || searchQuery.trim() === "")
      return;

    const URL = prepSearchQuery(searchQuery);

    const {data} = await Axios.get(URL);
    return data;
  }

  const {data, isLoading} = useQuery(
    "search", getSomething, {
      enabled: debouncedSearchQuery === searchQuery
    }
  );

  return (
    <motion.div
      ref={ref}
      animate={animate}
      variants={containerVariants}
      className={styles.searchBarContainer}
      style={{ background: colorMode === "light" ? 
        "#fafafa" : "#1e2837"
      }}
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
      <span 
        className={styles.lineSeparator}
        style={{ display: isExpanded ? "inherit" : "none" }}
      />
      <div className={styles.searchContent}>
        {isLoading && (
          <div className={styles.loadingWrapper}>
            <ClipLoader/>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default SearchInput;

