
import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../layout/AdminLayout";
import Main from "../layout/Main";
import CategoryDetails from "../pages/CategoryDetails";
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
        element:""
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
      element:""
    },
    {
      path:"/dashboard/buyers",
      element:""
    }



      ]

    }
  ]);

  export default router