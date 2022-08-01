import "~/styles/globals.sass";

import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ChakraProvider } from "@chakra-ui/react";
import { RouteGuard } from "~/components";
import {
  ConnectionsProvider,
  BookingsProvider,
  ReviewsProvider,
  UsersProvider,
  AuthProvider,
} from "~/contexts";

const MyApp = ({ Component, pageProps }) => {
  const queryClient = new QueryClient();

  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false}/>
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
      </QueryClientProvider>
    </ChakraProvider>
  );
};

export default MyApp;
