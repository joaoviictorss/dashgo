import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";

import { SidebarDrawerProvider } from "../context/SidebarDrawerContext";
import { MakerServer } from "@/src/services/mirage";

import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "../services/queryClient";

if (process.env.NODE_ENV === "development") {
  MakerServer();
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <SidebarDrawerProvider>
          <Component {...pageProps} />
        </SidebarDrawerProvider>
      </ChakraProvider>

      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
