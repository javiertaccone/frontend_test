import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './router/Router'
import { ProductContextProvider } from './context/ProductContext'
import { SearchContextProvider } from './context/SearchContext'
import { CartContextProvider } from './context/CartContext'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <ProductContextProvider>
      <SearchContextProvider>
        <CartContextProvider>
          <RouterProvider router={router} />
        </CartContextProvider>
      </SearchContextProvider>
    </ProductContextProvider>
)
