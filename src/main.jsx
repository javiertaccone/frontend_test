import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './router/Router'
import { ProductContextProvider } from './context/ProductContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ProductContextProvider>
    <RouterProvider router={router} />
  </ProductContextProvider>
)
