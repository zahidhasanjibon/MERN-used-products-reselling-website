import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { SpinnerCircular } from "spinners-react";
import { authContext } from "../../../authentication/AuthContext";

export default function AllBuyers() {
  const { logOut } = useContext(authContext);
  const navigate = useNavigate();

  const { data: allBuyers = [],isLoading ,refetch} = useQuery({
    queryKey: ["allbuyers"],
    queryFn: async () => {
      const jwttoken = localStorage.getItem("jwttoken");
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/buyers`,
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

  
  const handleDelete = (userId) => {
    fetch(`${process.env.REACT_APP_API_URL}/user/delete/${userId}`,{
      method:"DELETE"
    })
    .then(res => res.json())
    .then(d => {
      toast.success("user deleted successfully")
      refetch()
    })
  }





  if (isLoading) {
    return <div className="h-[70vh] text-center"> <SpinnerCircular color="blue" style={{ display: "inline" }} /></div>;
}

  return (
    <div className="container mx-auto mb-12">
      <h2 className="text-2xl my-6 text-center">All buyers</h2>

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
        <th>Seller Image</th>
        <th>Seller Name</th>
        <th>Seller Email</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
    {
        allBuyers.length > 0 && allBuyers.map((buyer) => (
            <tr key={buyer._id}>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={buyer.userImg} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
              </div>
            </td>
            <td>
              {buyer.userName}
              <br/>
             
            </td>
            <td>{buyer.userEmail}</td>
            <th>
              <button  onClick={() => handleDelete(buyer._id)} className="btn btn-primary btn-sm">Delete</button>
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
