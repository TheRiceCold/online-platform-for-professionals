import "@/styles/globals.sass";

import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ChakraProvider } from "@chakra-ui/react";

import BookingsProvider from "@/contexts/bookings/Context";
import ConnectionsProvider from "@/connections_context";
import ReviewsProvider from "@/reviews_context";
import UsersProvider from "@/users_context";
import AuthProvider from "@/auth_context";

import RouteGuard from "@/components/RouteGuard";

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
