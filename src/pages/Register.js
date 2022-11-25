import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { NavLink, useNavigate } from "react-router-dom";
import { authContext } from "../authentication/AuthContext";

export default function Register() {
  const [preview, setPreview] = useState("");

  const { signUp, updateProfileNameImg, isLoading, setIsLoading } =
    useContext(authContext);
  const navigate = useNavigate();

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

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const password = form.password.value;
    const role = form.role.value;

    const img = form.img.files[0]

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
        signUp(email, password)
        .then(() => {
          form.reset();
          // update image and name function
          updateProfileNameImg(name,imgUrl)
            .then((data) => {
                const userData = { email: data?.user.email };

                fetch(`${process.env.REACT_APP_API_URL}/jwtgenerate`, {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(userData),
                })
                  .then((res) => res.json())
                  .then((d) => {
                    localStorage.setItem("jwttoken", d.token);
                    userSaveToDb(email,name,role,imgUrl)
                  });
            })
            .catch((err) => {
              toast.error(err.message);
            });
        })
        .catch((err) => {
          toast.error(err.message);
        })
        .finally(() => {
          setIsLoading(false);
        });

      } else {
        toast.error('error while uplaod image')
      }
    })
    .catch((err) => toast.error(err))
  };

  const userSaveToDb = (email, name,role,imgUrl) => {
    fetch(`${process.env.REACT_APP_API_URL}/register`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ userEmail: email, userName: name,userImg:imgUrl,role:role}),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.acknowledged){
          toast.success('user Registration successfully')
          navigate("/");
        } else {
          toast.error("error in server side while create user")
        }
      })
      .catch((er) => toast.error(er));
  };

  return (
    <div className="container mx-auto">
      <div className="hero h-[89vh] bg-base-200">
        <div className="hero-content flex-col w-[370px]">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold">Register now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignUp} className="px-6 pb-8 pt-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
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
                  <span className="label-text">Role</span>
                </label>
                <select
                  name="role"
                  className="select select-primary w-full max-w-xs"
                >
                  <option value="buyer">buyer</option>
                  <option value="seller">seller</option>
                </select>

                <label className="label">
                  <NavLink
                    to="/login"
                    className="label-text-alt link link-hover"
                  >
                    have an account?
                  </NavLink>
                </label>
              </div>
              <div className="form-control mt-4">
                <button
                  disabled={isLoading}
                  type="submit"
                  className="btn btn-primary"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
