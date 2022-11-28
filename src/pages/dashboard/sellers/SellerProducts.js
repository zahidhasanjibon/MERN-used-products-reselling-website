import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { SpinnerCircular } from "spinners-react";
import { authContext } from "../../../authentication/AuthContext";

export default function SellerProducts() {
  const { logOut, user } = useContext(authContext);
  const navigate = useNavigate();

  const {
    data: allSellerProducts = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["sellerallroducts", user?.email],
    queryFn: async () => {
      if (!user?.email) return [];
      const jwttoken = localStorage.getItem("jwttoken");
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/seller/products?email=${user?.email}`,
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

  // update product status to advertise ture

  const handleAdvertise = (productId) => {
    fetch(
      `${process.env.REACT_APP_API_URL}/advertise/product/update/${productId}`,
      {
        method: "PUT",
      }
    )
      .then((res) => res.json())
      .then((d) => {
        toast.success("product advertised successfully")
        refetch();
      });
  };


    const handleDelete = (productId) => {

      fetch(
        `${process.env.REACT_APP_API_URL}/delete/product/${productId}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((d) => {
          toast.success("product deleted successfully")
          refetch();
        });


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
      <h2 className="text-2xl my-6 text-center">All Products</h2>

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
                <th>Product Status</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {allSellerProducts.length > 0 &&
                allSellerProducts.map((product) => (
                  <tr key={product._id}>
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
                              src={product.imgUrl}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {product.name}
                      <br />
                    </td>
                    <td>
                      
                      <p className="font-bold">
                        {product.resalePrice} $
                      </p>
                    </td>
                    <td>
                      <p className="btn btn-secondary btn-xs">
                        {product.status}
                      </p>
                    </td>
                    <th className="text-center">
                      <button onClick={() => handleDelete(product._id)} className="btn btn-primary btn-sm mr-4">
                        Delete
                      </button>
                      {product.status === "unsold" && !product.advertise ? (
                        <button
                          onClick={() => handleAdvertise(product._id)}
                          className="btn btn-primary btn-sm"
                        >
                          Advertise
                        </button>
                      ) : (
                        <p className="btn btn-secondary btn-xs">
                          already advertised
                        </p>
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
