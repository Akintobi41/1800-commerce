import { IChild } from "@src/tsTypes/react-types";
import { FC } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

export const queryClient = new QueryClient();

export const QueryClientProviderWrapper:FC<IChild> =({children}) => { 

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}
