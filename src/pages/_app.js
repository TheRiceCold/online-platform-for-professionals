import "@/styles/globals.sass"

import {ReactQueryDevtools} from "react-query/devtools"
import {QueryClientProvider, QueryClient} from "react-query"
import {ChakraProvider} from "@chakra-ui/react"

import RouteGuard from "@/components/RouteGuard"

import AuthProvider from "@/context/auth/Context"
import UsersProvider from "@/context/users/Context"
import LocationsProvider from "@/context/locations/Context"

const MyApp = ({Component, pageProps}) => {
  const queryClient = new QueryClient()

  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false}/>
        <LocationsProvider>
          <AuthProvider>
            <UsersProvider>
              <RouteGuard>
                <Component {...pageProps}/>
              </RouteGuard>
            </UsersProvider>
          </AuthProvider>
        </LocationsProvider>
      </QueryClientProvider>
    </ChakraProvider>
  )
}

export default MyApp
