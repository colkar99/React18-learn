import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider,ColorModeScript } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider} from '@tanstack/react-query'


import App from './App.tsx'
import './index.css'
import theme from './theme.ts'
import TodoLists from './practice/states/TodoLists.tsx'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import PostList from './practice/states/PostList.tsx'
const client = new QueryClient({
  defaultOptions:{
    queries:{
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      retry: 2,
      cacheTime: 300_000,
      staleTime: 100_000
    }
  }
});
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        {/* <App /> */}
        <TodoLists/>
        {/* <PostList/> */}
        <ReactQueryDevtools/>
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
