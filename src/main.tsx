import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Outlet } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import { routes } from './route'
import { RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
      queries: {
        // Données fraîches pendant 30 secondes
        staleTime: 30000,
        // Garder en cache pendant 5 minutes
        gcTime: 300000,
        // Retry 3 fois en cas d'erreur
        retry: 3,
        // Délai exponentiel entre les retries
        retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
        // Ne pas refetch automatiquement au focus de la fenêtre
        refetchOnWindowFocus: false,
      },
    },
})

function main() {
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Outlet />,
      children: [routes]
    },
  ])

  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </StrictMode>,
  )
}

void main();