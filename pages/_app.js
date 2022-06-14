import "../styles/globals.sass"

import {QueryClientProvider, QueryClient} from "react-query"
import {ReactQueryDevtools} from "react-query/devtools"
import {ChakraProvider} from "@chakra-ui/react"

import RouteGuard from "@/components/RouteGuard"

import AuthProvider from "@/auth_context"
import UsersProvider from "@/users_context"
import HelpersProvider from "@/helpers_context"
import ReviewsProvider from "@/reviews_context"
import ConnectionsProvider from "@/connections_context"
import BookingsProvider from "@/contexts/bookings/Context"

const MyApp = ({Component, pageProps}) => {
  const queryClient = new QueryClient()

  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false}/>
        <HelpersProvider>
          <AuthProvider>
            <UsersProvider>
              <ConnectionsProvider>
                <BookingsProvider>
                  <ReviewsProvider>
                    <RouteGuard>
                      <Component {...pageProps}/>
                    </RouteGuard>
                  </ReviewsProvider>
                </BookingsProvider>
              </ConnectionsProvider>
            </UsersProvider>
          </AuthProvider>
        </HelpersProvider>
      </QueryClientProvider>
    </ChakraProvider>
  )
}

export default MyApp
