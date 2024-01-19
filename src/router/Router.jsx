import { createBrowserRouter } from "react-router-dom"
import Error404 from "../components/pages/Error404"
import ProductListPage from "../components/pages/ProductListPage"

const router = createBrowserRouter([
    {
        path: "/",
        element: <ProductListPage />,
        errorElement: <Error404 />,
    }
])

export default router