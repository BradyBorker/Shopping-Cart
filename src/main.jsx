import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Checkout from './components/Checkout.jsx'

const router = createBrowserRouter([
  {
    path: '/:page?',
    element: <App />,
  },
  {
    path: 'checkout',
    element: <Checkout />,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
