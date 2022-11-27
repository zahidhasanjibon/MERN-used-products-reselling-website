import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { SpinnerCircular } from "spinners-react";
import { authContext } from "../../../authentication/AuthContext";

export default function ReportedItems() {
  const { logOut } = useContext(authContext);
  const navigate = useNavigate();

  const {
    data: reportedItems = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["reporteditems"],
    queryFn: async () => {
      const jwttoken = localStorage.getItem("jwttoken");
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/reported/products`,
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

  const handleDelete = (productId) => {
    fetch(`${process.env.REACT_APP_API_URL}/delete/product/${productId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((d) => {
        refetch();
        toast.success("product deleted successfully")
      });
  };

  if (isLoading) {
    return (
      <div className="h-[70vh] text-center">
        <SpinnerCircular color="blue" style={{ display: "inline" }} />
      </div>
    );
  }

  return (
    <div className="container mx-auto mb-12">
      <h2 className="text-2xl my-6 text-center">All reported Products</h2>

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
                <th>Product Price</th>
                <th>Seller Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {reportedItems.length > 0 &&
                reportedItems.map((item) => (
                  <tr key={item._id}>
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
                              src={item.imgUrl}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {item.name}
                      <br />
                    </td>
                    <td>{item.originalPrice}</td>
                    <td>{item.sellerName}</td>
                    <th>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="btn btn-primary btn-sm"
                      >
                        Delete
                      </button>
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
