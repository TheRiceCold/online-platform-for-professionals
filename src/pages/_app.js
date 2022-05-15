import {ChakraProvider} from "@chakra-ui/react"
import {ReactQueryDevtools} from "react-query/devtools"
import {QueryClientProvider, QueryClient} from "react-query"
import AppStateProvider from "@/context/state/AppStateContext"

const MyApp = ({Component, pageProps}) => {
  const queryClient = new QueryClient()

  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false}/>
        <AppStateProvider>
          <Component {...pageProps}/>
        </AppStateProvider>
      </QueryClientProvider>
    </ChakraProvider>
  )
}

export default MyApp
