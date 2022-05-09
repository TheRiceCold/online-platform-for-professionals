import '../styles/globals.css'
import {useState} from "react"
import {Hydrate} from "react-query/hydration"
import {ChakraProvider} from "@chakra-ui/react"
import AuthProvider from "@/context/AuthContext"
import {ReactQueryDevtools} from "react-query/devtools"
import AuthStateProvider from "@/context/AuthStateContext"
import {QueryClientProvider, QueryClient} from "react-query"

const MyApp = ({ Component, pageProps }) => {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ReactQueryDevtools initialIsOpen={false}/>
          <AuthStateProvider>
            <AuthProvider>
              <Component {...pageProps} />
            </AuthProvider>
          </AuthStateProvider>
        </Hydrate>
      </QueryClientProvider>
    </ChakraProvider>
  )
}

export default MyApp
