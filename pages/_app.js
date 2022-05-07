import '../styles/globals.css'
import {ChakraProvider} from "@chakra-ui/react"
import AuthProvider from "@/contexts/AuthProvider"
import {ReactQueryDevtools} from "react-query/devtools"
import {QueryClientProvider, QueryClient} from "react-query"

const reactQueryClient = new QueryClient()

const MyApp = ({ Component, pageProps }) => (
  <ChakraProvider>
    <QueryClientProvider client={reactQueryClient}>
      <ReactQueryDevtools initialIsOpen={false}/>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
    </QueryClientProvider>
  </ChakraProvider>
)

export default MyApp
