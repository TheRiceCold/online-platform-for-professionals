import {ChakraProvider} from "@chakra-ui/react"
import AuthProvider from "@/context/AuthContext"
import UserProvider from "@/context/UserContext"
import {ReactQueryDevtools} from "react-query/devtools"
import AppStateProvider from "@/context/AppStateContext"
import {QueryClientProvider, QueryClient} from "react-query"

const MyApp = ({Component, pageProps}) => {
  const queryClient = new QueryClient()

  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false}/>
        <AppStateProvider>
          <AuthProvider>
            <UserProvider>
              <Component {...pageProps}/>
            </UserProvider>
          </AuthProvider>
        </AppStateProvider>
      </QueryClientProvider>
    </ChakraProvider>
  )
}

export default MyApp
