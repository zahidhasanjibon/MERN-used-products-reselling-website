import { useContext } from "react"
import { Link, Outlet } from "react-router-dom"
import { authContext } from "../authentication/AuthContext"

import UseCheckUserRole from "../component/hook/useCheckuserRole"
import Navbar from "../component/navbar/Navbar"

export default function AdminLayout() {

  const {user} = useContext(authContext)
  const [roleName] = UseCheckUserRole(user?.email)
  console.log(roleName);
  return (
        <div>
                <Navbar></Navbar>
                <div className="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col">
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        <Outlet></Outlet>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-64 bg-base-100 text-base-content">
      {roleName === 'buyer' && <li><Link to="/dashboard/orders">Orders</Link></li>}
      {roleName === "seller" && <li><Link to="/dashboard/products">All Products</Link></li>}
      {roleName === 'seller' && <li><Link to="/dashboard/addproduct">Add Product</Link></li>}
      {roleName === 'admin' && <li><Link to="/dashboard/sellers">All Sellers</Link></li>}
      {roleName === 'admin' && <li><Link to="/dashboard/buyers">All Buyers</Link></li>}
      {roleName === 'admin' && <li><Link to="/dashboard/report">Reported Products</Link></li>}
    </ul>
  
  </div>
</div>


        </div>
  )
}
