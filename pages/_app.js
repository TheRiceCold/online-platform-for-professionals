import '../styles/globals.css'
import {ChakraProvider} from "@chakra-ui/react"
import {ReactQueryDevtools} from "react-query/devtools"
import {QueryClientProvider, QueryClient} from "react-query"

const reactQueryClient = new QueryClient()

const MyApp = ({ Component, pageProps }) => (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
)

export default MyApp
