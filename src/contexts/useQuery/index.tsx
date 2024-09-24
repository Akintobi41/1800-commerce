import { FC, ReactNode } from "react"
import { QueryClient, QueryClientProvider, useQueryClient } from "react-query"

type QueryProviderProps = { 
  children: ReactNode
}

export const queryClient = new QueryClient();

export const QueryClientProviderWrapper:FC<QueryProviderProps> =({children}) => { 

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}
