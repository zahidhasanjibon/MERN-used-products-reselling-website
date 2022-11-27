import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../../authentication/AuthContext";

export default function AddProduct() {
  const [preview, setPreview] = useState("");
  const [categories, setcategories] = useState([]);
  const [isLoading,setIsLoading] = useState(false)


  const {user} = useContext(authContext)

  const navigate = useNavigate();


        useEffect(() => {
                fetch(`${process.env.REACT_APP_API_URL}/productcategory`)
                .then(res => res.json())
                .then(d => {
                    setcategories(d)
                })
                .catch(err => console.log(err))

        },[])



  const handleUplaodImg = (e) => {
    const imgFile = e.target.files[0];

    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setPreview(reader.result);
      }
    };
    reader.readAsDataURL(imgFile);
  };

  // sign up functionality

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const img = form.img.files[0]

    const name = form.name.value
    const resalePrice = form.resaleprice.value
    const originalPrice = form.originalprice.value
    const location = form.location.value
    const mobile = form.phone.value
    const yearOfUse = form.purchaseyear.value
    const condition = form.condition.value
    const categoryId = form.category.value
    const description = form.desc.value

    const sellerName = user?.displayName
    const sellerEmail = user?.email

    setIsLoading(true)

    const prodcutInfo = {
        name,resalePrice,originalPrice,location,mobile,yearOfUse,condition,categoryId,description,sellerName,sellerEmail,status:"unsold"
    }

    const formData = new FormData()
    formData.append("image",img)

    const imgbbApiUrl = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMG_BB_API}`

    fetch(imgbbApiUrl,{
      method:"POST",
      body:formData
    })
    .then(res => res.json())
    .then((d) => {
      if(d.success){
        const imgUrl = d.data?.url
        prodcutInfo.imgUrl = imgUrl
        saveProductToDb(prodcutInfo)
      } else {
        toast.error('error while uplaod image')
      }
    })
    .catch((err) => {
      toast.error(err)
      setIsLoading(false)
    })
  };


        function saveProductToDb (prodcutInfo) {
            fetch(`${process.env.REACT_APP_API_URL}/product`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(prodcutInfo)
            })
                .then(res => res.json())
                .then(d => {
                    toast.success("Product Create Successfully")
                    navigate("/dashboard/products")
                })
                .catch(err => console.log(err))
                .finally(() => setIsLoading(false))


        }


  return (
    <div className="container mx-auto">
      <div className="hero h-[89vh] bg-base-200">
        <div className="hero-content flex-col w-[370px]">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold">Create Product!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="px-6 pb-8 pt-4">
              <div className="form-control">
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <input
                  name="resaleprice"
                  type="number"
                  placeholder="Resale Price"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <input
                  name="originalprice"
                  type="number"
                  placeholder="Original Price"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
              <input
                  name="location"
                  type="text"
                  placeholder="Location"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <input
                  name="phone"
                  type="number"
                  placeholder="phone"
                  className="input input-bordered"
                  required
                />
                <input
                  name="purchaseyear"
                  type="number"
                  placeholder="year of purchase"
                  className="input input-bordered"
                  required
                />

                <label className="label">
                  <span className="label-text">choose image</span>
                </label>
                <div className="form-control w-full max-w-xs">
                <div className="avatar items-center">
                  {
                    preview && (
                       <div className="w-24 rounded">
                 <img src={preview} alt="" />
              </div>
                    )
                  }
             
              <input
                    type="file"
                    name="img"
                    onChange={handleUplaodImg}
                    className="file-input file-input-bordered w-full max-w-xs"
                    accept=".png, .jpg, .jpeg"
                    required
                  />

            </div>

                
                </div>
                <label className="label">
                  <span className="label-text">prduct condition</span>
                </label>
                <select
                required
                  name="condition"
                  className="select select-primary w-full max-w-xs"
                >
                  <option value="excellent">Excellent</option>
                  <option value="good">Good</option>
                  <option value="fair">Fair</option>
                </select>

                  <div>
                  <label className="label">
                  <span className="label-text">prduct Category</span>
                </label>
                <select
                required
                  name="category"
                  className="select select-primary w-full max-w-xs"
                >
                    {
                        categories.length > 0 && categories.map((cat) =>(
                            <option key={cat._id} value={cat._id}>{cat.category}</option>
                        ) )
                    }
               
                </select>

                <textarea name="desc" required className="textarea textarea-primary w-full -max-w-xs" placeholder="Description"></textarea>



                  </div>
              </div>
              <div className="form-control mt-4">
                <button
                  disabled={isLoading}
                  type="submit"
                  className="btn btn-primary"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
