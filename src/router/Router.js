
import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../layout/AdminLayout";
import Main from "../layout/Main";
import CategoryDetails from "../pages/CategoryDetails";
import AllBuyers from "../pages/dashboard/admin/AllBuyers";
import AllSellers from "../pages/dashboard/admin/AllSellers";
import MyOrders from "../pages/dashboard/buyers/MyOrders";
import Home from "../pages/Home";
import Login from "../pages/Login";
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
      }
    ]
    },
    {
      path:"/dashboard",
      element:<AdminLayout />,
      children:[

        {path:"/dashboard/orders",
        element:<MyOrders />
      },
      {path:"/dashboard/products",
      element:""
    },
    {
      path:"/dashboard/addproduct",
      element:""
    },
    {
      path:"/dashboard/sellers",
      element:<AllSellers />
    },
    {
      path:"/dashboard/buyers",
      element:<AllBuyers />
    }



      ]

    }
  ]);

  export default router