import "@/styles/globals.sass"

import {ChakraProvider} from "@chakra-ui/react"
import RouteGuard from "@/components/RouteGuard"
import UsersProvider from "@/context/users/Context"
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
          <UsersProvider>
            <RouteGuard>
              <Component {...pageProps}/>
            </RouteGuard>
          </UsersProvider>
        </AppStateProvider>
      </QueryClientProvider>
    </ChakraProvider>
  )
}

export default MyApp
