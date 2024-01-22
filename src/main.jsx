import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './router/Router'
import { ProductContextProvider } from './context/ProductContext'
import { SearchContextProvider } from './context/SearchContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ProductContextProvider>
    <SearchContextProvider>
      <RouterProvider router={router} />
    </SearchContextProvider>
  </ProductContextProvider>
)
