import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import {auth} from "../firebase-config"
const Login = () => {
  const [email,setEmail] = useState()
  const [pass,setPass] = useState()
  const navigate = useNavigate();
  const handlelogin = async () => {
    // e.preventDefault();
    // navigate("/signup");
    try {
      const user = await signInWithEmailAndPassword(auth,email,pass)
      console.log(user)
      navigate("/home")
    } catch (err) {
      alert(err.message)
    }
  };
  return (
    <>
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="img-fluid"
                alt="Phone image"
              />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form>
                {/* <!-- Email input --> */}
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    value={email}
                    id="form1Example13"
                    onChange={(e)=>{
                      setEmail(e.target.value)
                    }}  
                    className="form-control form-control-lg"
                    placeholder="Enter email"
                    required
                  />
        
                </div>

                {/* <!-- Password input --> */}
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    value={pass}
                    onChange={
                      (e)=>{
                        setPass(e.target.value)
                      }
                    }
                    id="form1Example23"
                    className="form-control form-control-lg"
                   placeholder="Enter Password"
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-primary btn-lg btn-block"
                  onClick={handlelogin}
                >
                  Login
                </button>
              </form>
              <p className="small fw-bold mt-2 pt-1 mb-0">
                Don't Have an account?{" "}
                <a href="/signup" className="link-danger">
                  Register
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
