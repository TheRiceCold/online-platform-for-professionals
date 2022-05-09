import '../styles/globals.css'
import {useState} from "react"
import {Hydrate} from "react-query/hydration"
import {ChakraProvider} from "@chakra-ui/react"
import AuthProvider from "@/contexts/AuthContext"
import {ReactQueryDevtools} from "react-query/devtools"
import {QueryClientProvider, QueryClient} from "react-query"

const MyApp = ({ Component, pageProps }) => {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ReactQueryDevtools initialIsOpen={false}/>
          <AuthProvider>
            <Component {...pageProps} />
          </AuthProvider>
        </Hydrate>
      </QueryClientProvider>
    </ChakraProvider>
  )
}

export default MyApp
