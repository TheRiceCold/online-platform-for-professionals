import {ChakraProvider} from "@chakra-ui/react"
import UserProvider from "@/context/user/UserContext"
import {ReactQueryDevtools} from "react-query/devtools"
import {QueryClientProvider, QueryClient} from "react-query"

const MyApp = ({Component, pageProps}) => {
  const queryClient = new QueryClient()

  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false}/>
          <UserProvider>
            <Component {...pageProps}/>
          </UserProvider>
      </QueryClientProvider>
    </ChakraProvider>
  )
}

export default MyApp
