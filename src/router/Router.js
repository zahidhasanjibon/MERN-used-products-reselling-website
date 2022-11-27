
import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../layout/AdminLayout";
import Main from "../layout/Main";
import Blog from "../pages/Blog";
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
import AdminRoute from "../routes/AdminRoute";
import PrivateRoute from "../routes/PrivateRoute";
import PublicRoute from "../routes/Publicrouter";
import SellerRoute from "../routes/SellerRoute";


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
        path:"/category/:id",
        element:<PrivateRoute><CategoryDetails /></PrivateRoute>
      },
      {
        path:"/blog",
        element:<Blog />
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
      element:<SellerRoute><SellerProducts /></SellerRoute>
    },
    {
      path:"/dashboard/addproduct",
      element:<SellerRoute><AddProduct /></SellerRoute>
    },
    {
      path:"/dashboard/sellers",
      element:<AdminRoute><AllSellers /></AdminRoute>
    },
    {
      path:"/dashboard/buyers",
      element:<AdminRoute><AllBuyers /></AdminRoute>
    },
    {
      path:"/dashboard/report",
      element:<AdminRoute><ReportedItems /></AdminRoute>
    }
      ]
    },
    {
      path:"*",
      element:<NotFound />
    }
  ]);

  export default router