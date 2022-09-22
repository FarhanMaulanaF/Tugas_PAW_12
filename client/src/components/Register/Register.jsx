import React, { useState, useEffect } from "react";

import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { authenticate, isAuth } from "../helpers/auth";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Background from "../components/Homepage/Cover/Background";
import LogoTitle from "../assets/images/homepage/Logo-w-title.svg";

import logoNesco from "../assets/logotc-big.png";

const Register = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuth()) {
      navigate("/beranda");
    }
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password1: "",
    password2: "",
    textChange: "Sign Up",
  });

  const { name, email, password1, password2, textChange } = formData;
  const handleChange = (text) => (e) => {
    setFormData({ ...formData, [text]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && password1) {
      if (password1 === password2) {
        setFormData({ ...formData, textChange: "Submitting" });
        axios
          .post(`${process.env.REACT_APP_API_URL}/register`, {
            name,
            email,
            password: password1,
          })
          .then((res) => {
            setFormData({
              ...formData,
              name: "",
              email: "",
              password1: "",
              password2: "",
              textChange: "Submitted",
            });

            toast.success(res.data.message);
          })
          .catch((err) => {
            setFormData({
              ...formData,
              name: "",
              email: "",
              password1: "",
              password2: "",
              textChange: "Sign Up",
            });
            console.log(err.response);
            toast.error(err.response.data.errors);
          });
      } else {
        toast.error("Password tidak sesuai");
      }
    } else {
      toast.error("Isikan seluruh informasi yang dibutuhkan");
    }
  };

  return (
    <header className="w-full gap-2 bg-cover relative py-8 px-2 sm:px-8 bg-gradient-to-r from-biru to-ungu min-h-screen grid grid-cols-1 justify-items-center">
      <Background />
      <div className="justify-self-center sm:justify-self-start ">
        <Link to="/">
          <img alt="" src={LogoTitle} className="h-20 "></img>
        </Link>
      </div>
      <ToastContainer />
      <form
        onSubmit={handleSubmit}
        className="bg-gradient-to-r from-[#262642] to-[#302B4A] backdrop-blur-md flex-1  p-6 w-5/6 sm:w-2/3 max-w-xl rounded-3xl outline-[#] outline-2"
      >
        <div className="  mx-auto  text-center">
          <h1 className="text-white font-futuramd italic font-bold mb-8  ">
            {" "}
            SIGN UP
          </h1>
        </div>
        <div className=" text-base text-white h-8">Name</div>
        <input
          className=" text-gray-500  bg-[#3B3C5A] p-3  text-base w-full under focus:outline-none placeholder:text-gray-400 "
          placeholder="Enter your full name"
          onChange={handleChange("name")}
          value={name}
        ></input>

        <div className=" text-base mt-4 text-white h-8">E-mail</div>
        <input
          type={"email"}
          className=" text-white  bg-[#3B3C5A] text-base p-3 mt-1 bg-transparent w-full placeholder:text-gray-400  under focus:outline-none"
          placeholder="Enter your email"
          onChange={handleChange("email")}
          value={email}
        ></input>
        <div className=" text-base mt-4 text-white h-8">Password</div>
        <input
          type={"password"}
          className=" text-white  bg-[#3B3C5A] text-base p-3 mt-1 bg-transparent w-full placeholder:text-gray-400  under focus:outline-none"
          placeholder="Enter your password"
          onChange={handleChange("password1")}
          value={password1}
        ></input>
        <div className=" text-base mt-4 text-white h-8">Confirm Password</div>
        <input
          type={"password"}
          className=" text-white  bg-[#3B3C5A] text-base p-3 mt-1 bg-transparent w-full placeholder:text-gray-400  under focus:outline-none"
          placeholder="Enter your password"
          onChange={handleChange("password2")}
          value={password2}
        ></input>
        <div className=" h-7"></div>

        <div className=" mx-auto w-full text-center">
          <button
            type="submit"
            className=" my-4 bg-birumuda  w-full text-center mx-auto px-10 py-2  text-white transform transition duration-300 scale-100 "
          >
            <h1 className="text-white  text-base font-futuramd ">Sign Up</h1>
          </button>
          <div className="text-center font-futuramd text-gray-400 text-base ">
            <p className="inline"> Already have an account ? </p>
            <Link className="inline font-bold " to="/login">
              Login
            </Link>
          </div>
        </div>
      </form>

      {/* <GoogleLogin
                  clientId={`969730953690-habthaq3j8jg46i53tnn48njosr8ifgi.apps.googleusercontent.com`}
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={'single_host_origin'}
                  render={renderProps => (
                    <button
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                      className='w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline'
                    >
                      <div className=' p-2 rounded-full '>
                        <i className='fab fa-google ' />
                      </div>
                      <span className='ml-4'>Sign In with Google</span>
                    </button>
                  )}
                ></GoogleLogin> */}
    </header>
  );
};

export default Register;
