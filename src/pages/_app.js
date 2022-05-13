import {ChakraProvider} from "@chakra-ui/react"
import UserProvider from "@/context/user/UserContext"
import AuthProvider from "@/context/auth/AuthContext"
import {ReactQueryDevtools} from "react-query/devtools"
import {QueryClientProvider, QueryClient} from "react-query"

const MyApp = ({Component, pageProps}) => {
  const queryClient = new QueryClient()

  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false}/>
          <AuthProvider>
            <UserProvider>
              <Component {...pageProps}/>
            </UserProvider>
          </AuthProvider>
      </QueryClientProvider>
    </ChakraProvider>
  )
}

export default MyApp
