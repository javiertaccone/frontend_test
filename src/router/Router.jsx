import ProductListPage from "../components/pages/ProductListPage"
import { createBrowserRouter } from "react-router-dom"
import ProductDetailsPage from "../components/pages/ProductDetailsPage"
import Error404 from "../components/pages/Error404"


const router = createBrowserRouter([
    {
        path: "/",
        element: <ProductListPage />,
        errorElement: <Error404 />,
    },
    {
        path: "/detail",
        element: <ProductDetailsPage />,
        errorElement: <Error404 />,
    }
])

export default router