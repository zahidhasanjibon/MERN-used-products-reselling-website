
import { createBrowserRouter } from "react-router-dom";
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
  ]);

  export default router