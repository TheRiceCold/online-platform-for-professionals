import Head from "next/head"
import {useState} from "react"
import SearchBar from "@/components/SearchBar"

function Search() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <main>
      <Head>
        <title>Search</title>
      </Head>
      <SearchInput/>
    </main>
  )
}

export default Search
