import Head from "next/head"
import SearchInput from "@/components/SearchInput"

function SearchBar() {
  return (
    <main>
      <Head>
        <title>Search</title>
      </Head>
      <SearchInput/>
    </main>
  )
}

export default SearchBar
