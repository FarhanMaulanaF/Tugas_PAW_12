import React, { useState, useEffect } from "react";
// import authSvg from '../assets/login.svg';
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { authenticate, isAuth } from "../helpers/auth";
import { Link, Redirect, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import LoadingSpinner from "../components/LoadingSpiner";
import logoNesco from "../assets/logotc-big.png";
import Background from "../components/Homepage/Cover/Background";
import LogoTitle from "../assets/images/homepage/Logo-w-title.svg";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuth()) {
      navigate("/beranda");
    }
  });

  const [formData, setFormData] = useState({
    email: "",
    password1: "",
    textChange: "Sign In",
  });
  const { email, password1, textChange } = formData;
  const handleChange = (text) => (e) => {
    setFormData({ ...formData, [text]: e.target.value });
  };

  //  const sendGoogleToken = tokenId => {
  //   axios
  //     .post(`${process.env.REACT_APP_API_URL}/googlelogin`, {
  //       idToken: tokenId
  //     })
  //     .then(res => {
  //       console.log(res.data);
  //       informParent(res);
  //     })
  //     .catch(error => {
  //       console.log('GOOGLE SIGNIN ERROR', error.response);
  //     });
  // };
  // const informParent = response => {
  //   authenticate(response, () => {
  //     isAuth() && isAuth().role === 'admin'
  //       ? history.push('/admin')
  //       : history.push('/private');
  //   });
  // };
  // const responseGoogle = response => {
  //   console.log(response);
  //   sendGoogleToken(response.tokenId);
  // };
  const handleSubmit = (e) => {
    console.log(process.env.REACT_APP_API_URL);
    e.preventDefault();
    if (email && password1) {
      setFormData({ ...formData, textChange: "Submitting" });
      axios
        .post(`${process.env.REACT_APP_API_URL}/login`, {
          email,
          password: password1,
        })
        .then((res) => {
          // Authenticate MEMBUAT SET COOKIE TOKEN (JWT SECRET)
          setIsLoading(false);
          authenticate(res, () => {
            console.log(isAuth());

            setFormData({
              ...formData,
              email: "",
              password1: "",
              textChange: "Submitted",
            });

            if (isAuth() && isAuth().role === "admin") {
              navigate("/admin");
              toast.success(`Selamat datang ${res.data.user.name}!`);
            } else {
              navigate("/beranda");
              toast.success(`Selamat datang ${res.data.user.name}!`);
            }
          });
        })
        .catch((err) => {
          setFormData({
            ...formData,
            email: "",
            password1: "",
            textChange: "Sign In",
          });
          console.log(err.response);
          toast.error(err.response.data.errors);
        });
    } else {
      toast.error("Isikan keseluruhan informasi Anda");
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
        className="bg-gradient-to-r from-[#262642] to-[#302B4A] backdrop-blur-md flex-1 md:px-16 rounded-3xl outline-[#] outline-2  p-6 w-5/6 sm:w-2/3 max-w-xl"
      >
        <div className="  mx-auto  text-center">
          <h1 className="text-white font-futuramd italic font-bold mb-8  ">
            LOGIN
          </h1>
        </div>
        <div className=" text-base text-white h-8">Email</div>
        <input
          className=" text-gray-500  bg-[#3B3C5A] p-3  text-base w-full under focus:outline-none placeholder:text-gray-400 "
          placeholder="Enter your email address"
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

        <div className=" h-7"></div>

        <div className=" mx-auto w-full text-center">
          <button
            type="submit"
            className=" my-4 bg-birumuda  w-full text-center mx-auto px-10 py-2  text-white transform transition duration-300 scale-100 hover:opacity-75 transition duration-300 "
          >
            <h1 className="text-white  text-base font-futuramd ">Login</h1>
          </button>
          <div className="text-center font-futuramd text-gray-400 text-base ">
            <p className="inline"> Don't have an account ? </p>
            <Link className="inline font-bold hover:text-putih transition duration-300" to="/register">
              Sign Up
            </Link>
            <Link className="hover:text-putih transition duration-300" to="/forgetpassword">
              <p>Forget password?</p>
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

export default Login;
