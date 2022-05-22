import "@/styles/globals.sass"

import {ReactQueryDevtools} from "react-query/devtools"
import {QueryClientProvider, QueryClient} from "react-query"
import {ChakraProvider} from "@chakra-ui/react"

import RouteGuard from "@/components/RouteGuard"

import AuthProvider from "@/auth_context"
import UsersProvider from "@/users_context"
import HelpersProvider from "@/helpers_context"

const MyApp = ({Component, pageProps}) => {
  const queryClient = new QueryClient()

  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false}/>
        <HelpersProvider>
          <AuthProvider>
            <UsersProvider>
              <RouteGuard>
                <Component {...pageProps}/>
              </RouteGuard>
            </UsersProvider>
          </AuthProvider>
        </HelpersProvider>
      </QueryClientProvider>
    </ChakraProvider>
  )
}

export default MyApp
