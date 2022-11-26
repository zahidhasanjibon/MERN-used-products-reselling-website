
import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../layout/AdminLayout";
import Main from "../layout/Main";
import CategoryDetails from "../pages/CategoryDetails";
import AllBuyers from "../pages/dashboard/admin/AllBuyers";
import AllSellers from "../pages/dashboard/admin/AllSellers";
import ReportedItems from "../pages/dashboard/admin/ReportedItems";
import MyOrders from "../pages/dashboard/buyers/MyOrders";
import AddProduct from "../pages/dashboard/sellers/AddProduct";
import SellerProducts from "../pages/dashboard/sellers/SellerProducts";
import ErrorPage from "../pages/error/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/notFound/NotFound";
import Register from "../pages/Register";
import PrivateRoute from "../routes/PrivateRoute";
import PublicRoute from "../routes/Publicrouter";


const router = createBrowserRouter([
    {
      path: "/",
      element:<Main />,
      children:[{
        path:"/",
        element:<Home />
      },
      {
        path:"/login",
        element:<PublicRoute><Login /></PublicRoute>
      },
      {
        path:"/register",
        element:<PublicRoute><Register /></PublicRoute>
      },
      {
        path:"/category/:name",
        element:<PrivateRoute><CategoryDetails /></PrivateRoute>
      },
      {path:"*",
    element:<NotFound />}
    ]
    },
    {
      path:"/dashboard",
      element:<AdminLayout />,
      errorElement:<ErrorPage />,
      children:[

        {path:"/dashboard/orders",
        element:<MyOrders />,
      },
      {path:"/dashboard/products",
      element:<SellerProducts />
    },
    {
      path:"/dashboard/addproduct",
      element:<AddProduct />
    },
    {
      path:"/dashboard/sellers",
      element:<AllSellers />
    },
    {
      path:"/dashboard/buyers",
      element:<AllBuyers />
    },
    {
      path:"/dashboard/report",
      element:<ReportedItems />
    }
      ]
    },
    {
      path:"*",
      element:<NotFound />
    }
  ]);

  export default router