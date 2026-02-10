import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Outlet } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import { routes } from './route'
import { RouterProvider } from 'react-router-dom'

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
      <RouterProvider router={router} />
    </StrictMode>,
  )
}

void main();