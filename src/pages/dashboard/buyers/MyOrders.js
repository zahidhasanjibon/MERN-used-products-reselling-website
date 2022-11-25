import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { SpinnerCircular } from "spinners-react";
import { authContext } from "../../../authentication/AuthContext";

export default function MyOrders() {
  const { user, logOut } = useContext(authContext);
  const navigate = useNavigate();

  // eslint-disable-next-line no-unused-vars
  const { data: myOrders = [],isLoading } = useQuery({
    queryKey: ["myorders", user?.email],
    queryFn: async () => {
      const jwttoken = localStorage.getItem("jwttoken");
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/orders?email=${user?.email}`,
        {
          headers: {
            authorization: `bearer ${jwttoken}`,
          },
        }
      );
      if (res.status === 401 || res.status === 403) {
        toast.error("unauthorized access");
          logOut()
          .then(() => {
            localStorage.removeItem("jwttoken");
            navigate("/login");
          })
          .catch((err) => {
            toast.error(err);
          });
      }

      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <div className="h-[70vh] text-center"> <SpinnerCircular color="blue" style={{ display: "inline" }} /></div>;
}
console.log(myOrders);
  return (
    <div className="container mx-auto mb-12">
      <h2 className="text-2xl my-6 text-center">My Orders</h2>

      <div className="px-6">
      <div className="overflow-x-auto w-full">
  <table className="table w-full">
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Product Image</th>
        <th>Product Name</th>
        <th>Price</th>
        <th>Payment</th>
      </tr>
    </thead>
    <tbody>
    {
        myOrders.length > 0 && myOrders.map((order) => (
            <tr key={order._id}>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={order.productImg} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
              </div>
            </td>
            <td>
              {order.productName}
              <br/>
             
            </td>
            <td>{order.productPrice}</td>
            <th>
              <button className="btn btn-primary btn-sm">Pay</button>
            </th>
          </tr>
        ))
    }

    
    </tbody>

    
  </table>
</div>
      </div>
    </div>
  );
}
