import React ,{ useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase-config";
import { createUserWithEmailAndPassword ,onAuthStateChanged} from "firebase/auth";
const Signup = () => {
  const navigate = useNavigate();
  // navigate("/login");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [user,setUser] = useState({})
  onAuthStateChanged(auth,(currentuser)=>{
    setUser(currentuser)
  })
  const register = async () => {
    try{
      const user = await createUserWithEmailAndPassword(auth,email,pass)
      console.log(user)
      navigate("/home")
    }
catch(err)
{
  alert(err.message)
}
  }
  return (
    <>
      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid"
                alt="Sample image"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form>
                {/* <!-- Email input --> */}
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    name="email"
                    value={email}
                    id="form3Example3"
                    onChange={(e)=>{
                      setEmail(e.target.value)
                    }}
                    className="form-control form-control-lg"
                    placeholder="Enter a valid email address"
                  />
                </div>

                {/* <!-- Password input --> */}
                <div className="form-outline mb-3">
                  <input
                    type="password"
                    name="password"
                    id="form3Example4"
                    value={pass}
                    onChange={(e)=>{
                      setPass(e.target.value)
                    }}
                    className="form-control form-control-lg"
                    placeholder="Enter password"
                  />
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg"
                    styles="padding-left: 2.5rem; padding-right: 2.5rem;"
                    onClick={register}
                  >
                    Register
                  </button>
                  {/* <p className="small fw-bold mt-2 pt-1 mb-0">
                    Have an account?
                    <br />
                    <a href="/login" className="link-danger" >
                      Login
                    </a>
                  </p> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
