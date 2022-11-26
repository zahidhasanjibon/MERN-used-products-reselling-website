import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { SpinnerCircular } from "spinners-react";
import { authContext } from "../../../authentication/AuthContext";

export default function AllSellers() {
  const { logOut } = useContext(authContext);
  const navigate = useNavigate();

  const {
    data: allSellers = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allsellers"],
    queryFn: async () => {
      const jwttoken = localStorage.getItem("jwttoken");
      const res = await fetch(`${process.env.REACT_APP_API_URL}/sellers`, {
        headers: {
          authorization: `bearer ${jwttoken}`,
        },
      });
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

  const handleVerify = (sellerEmail) => {
    fetch(`${process.env.REACT_APP_API_URL}/user/seller/update/${sellerEmail}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((d) => {
        toast.success("seller verified successfully")
        refetch();
      })
      .catch((err) => console.log(err))
      
  };

  const handleDelete = (userId) => {
    fetch(`${process.env.REACT_APP_API_URL}/user/delete/${userId}`,{
      method:"DELETE"
    })
    .then(res => res.json())
    .then(d => {
      toast.success('user deleted successfully')
      refetch()
    })
  }




  if (isLoading) {
    return (
      <div className="h-[70vh] text-center">
        <SpinnerCircular color="blue" style={{ display: "inline" }} />
      </div>
    );
  }
  return (
    <div className="container mx-auto mb-12">
      <h2 className="text-2xl my-6 text-center">All Sellers</h2>

      <div className="px-6">
        <div className="overflow-x-auto w-full pr-12">
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
                <th>Status</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {allSellers.length > 0 &&
                allSellers.map((seller) => (
                  <tr key={seller._id}>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={seller.userImg}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {seller.userName}
                      <br />
                    </td>
                    <td>{seller.userEmail}</td>
                    <td>
                      {seller.verify ? (
                        <p className="btn btn-xs btn-primary">verified</p>
                      ) : (
                        <p className="btn btn-xs btn-secondary">unverified</p>
                      )}
                    </td>
                    <th>
                      <button onClick={() => handleDelete(seller._id)} className="btn btn-primary btn-sm mr-6">
                        Delete
                      </button>
                      {!seller.verify ? (
                        <button
                          onClick={() => handleVerify(seller.userEmail)}
                          className="btn btn-success text-white btn-sm"
                        >
                          verify
                        </button>
                      ) : (
                        ""
                      )}
                    </th>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
