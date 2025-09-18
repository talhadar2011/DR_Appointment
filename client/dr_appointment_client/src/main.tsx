import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import './index.css'
import AppContextProvider from './context/AppContext'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { QueryClientProvider,QueryClient } from '@tanstack/react-query'
// Import the generated route tree
import { routeTree } from './routeTree.gen'

// Create a new router instance
const router = createRouter({ routeTree })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
const client=new QueryClient()
// Render the app
const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <QueryClientProvider client={client}>
      <AppContextProvider>
        <RouterProvider router={router} />
      </AppContextProvider>
        <ReactQueryDevtools initialIsOpen={false} />

    </QueryClientProvider>  
  )
}