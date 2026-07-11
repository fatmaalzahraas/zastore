import MainLayout from "@/layouts/MainLayout"
import About from "@/pages/About/About"
import Cart from "@/pages/Cart/Cart"
import Home from "@/pages/Home/Home"
import Login from "@/pages/Login/Login"
import NotFound from "@/pages/NotFound/NotFound"
import ProductDetails from "@/pages/ProductDetails.tsx/ProductDetails"
import Register from "@/pages/Register/Register"
import Shop from "@/pages/Shop/Shop"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'shop',
        element: <Shop />
      },
      {
        path: 'product/:id',
        element: <ProductDetails />
      },
      { 
        path: 'login', 
        element: <Login /> 
      },
      { 
        path: 'register', 
        element: <Register /> 
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'cart',
        element: <Cart />
      }
    ]
  }
])
const AppRouter = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default AppRouter