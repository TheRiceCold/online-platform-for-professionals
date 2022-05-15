import {ChakraProvider} from "@chakra-ui/react"
import AppStateProvider from "@/context/state/context"
import {ReactQueryDevtools} from "react-query/devtools"
import {QueryClientProvider, QueryClient} from "react-query"

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
