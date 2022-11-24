import { useContext } from "react";
import toast from "react-hot-toast";
import { NavLink, useNavigate } from "react-router-dom";
import { authContext } from "../authentication/AuthContext";

export default function Register() {
  // const [imgPreview, setImgPreview] = useState("");

  const { signUp, updateProfileNameImg,isLoading ,setIsLoading} = useContext(authContext);
  const navigate = useNavigate();


  // sign up functionality

  const handleSignUp = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const imgUrl = form.imgurl.value;
    const password = form.password.value;


    signUp(email, password)
      .then(() => {
        form.reset();
        // update image and name function
          updateProfileNameImg(name, imgUrl)
            .then((data) => {
            //   const userData = { email: data?.user.email };
            //   console.log(userData);
              navigate("/")

            //   fetch(`${process.env.REACT_APP_API_URL}/jwtgenerate`, {
            //     method: "POST",
            //     headers: {
            //       "Content-Type": "application/json",
            //     },
            //     body: JSON.stringify(userData),
            //   })
            //     .then((res) => res.json())
            //     .then((d) => {
            //       localStorage.setItem("jwttoken", d.token);
            //     //   userSaveToDb(email,name)
            //     });
             
            })
            .catch((err) => {

              toast.error(err.message);
            });
        
      })
      .catch((err) => {
        toast.error(err.message);
      })
      .finally(() => {
        setIsLoading(false)
      })
    
      
  };

    // eslint-disable-next-line no-unused-vars
    const userSaveToDb = (email,name) => {
          fetch(`${process.env.REACT_APP_API_URL2}/user`,{
            method:"POST",
            headers:{
              "content-type":"application/json"
            },
            body:JSON.stringify({userEmail:email,
            userName:name})
          })
          .then(res => res.json())
          .then(data => {
            navigate("/");
          })
          .catch(er => toast.error(er))
    }

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
                  <span className="label-text">img url</span>
                </label>
                <input
                  name="imgurl"
                  type="text"
                  placeholder="img url"
                  className="input input-bordered"
                />

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
                <button disabled={isLoading} type="submit" className="btn btn-primary">
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
