import "@/styles/globals.sass"

import {ChakraProvider} from "@chakra-ui/react"
import RouteGuard from "@/components/RouteGuard"
import AppStateProvider from "@/context/state/Context"
import {ReactQueryDevtools} from "react-query/devtools"
import {QueryClientProvider, QueryClient} from "react-query"

const MyApp = ({Component, pageProps}) => {
  const queryClient = new QueryClient()

  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false}/>
        <AppStateProvider>
          <RouteGuard>
            <Component {...pageProps}/>
          </RouteGuard>
        </AppStateProvider>
      </QueryClientProvider>
    </ChakraProvider>
  )
}

export default MyApp
