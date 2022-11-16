import React, { useState, useEffect } from "react";

import axios from "axios";
import { authenticate, isAuth } from "../../helpers/auth.js";
import { Link, Redirect, useNavigate } from "react-router-dom";
import GambarOrang from "../../assets/Gambar Orang.svg";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuth()) {
      navigate("/dashboard");
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
              navigate("/dashboard");
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
    <div className="h-screen bg-white grid md:grid-cols-2 font-Roboto">
      <div className="bg-[#319C69] justify-center items-center flex">
        <ToastContainer />
        <div className="w-2/3 h-full py-16 flex-col flex items-center justify-center md:py-0 md:h-2/3">
          <h1 className="text-2xl md:text-3xl text-white text-center  font-bold">
            Pristin
          </h1>
          <img src={GambarOrang} alt="Gambar Login" className="mt-12" />
        </div>
      </div>

      <div className="bg-white justify-center items-center flex">
        <div className="w-2/3 h-full py-16 md:py-0 md:h-fit">
          <h1 className="text-2xl md:text-3xl text-black text-center font-bold mb-10">
            Welcome back!
          </h1>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  className="shadow border rounded-lg w-full py-3.5 px-3 text-gray-700 leading-tight focus:outline-none"
                  id="email"
                  type="text"
                  value={email}
                  onChange={handleChange("email")}
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
                <input
                  className="shadow border rounded-lg w-full py-3.5 px-3 text-gray-700 mb-3 leading-tight focus:outline-none"
                  id="password"
                  type={"password"}
                  value={password1}
                  onChange={handleChange("password1")}
                  placeholder="Enter your password"
                />
                {/* <p class="text-red-500 text-xs italic">
                  Please input a password.
                </p> */}
              </div>
              <div className="mb-5">
                <Link to="/forgot-password">
                  <div className="text-sm text-right font-bold hover:underline hover:text-[#424242]">
                    Forgot password?
                  </div>
                </Link>
              </div>
              <div className="mb-5">
                <button
                  type="submit"
                  className="border rounded-lg text-white bg-[#333333] hover:bg-black w-full py-3.5"
                >
                  Sign in
                </button>
              </div>
              <div>
                <p className="text-center">
                  Don't have an account?&nbsp;
                  <Link
                    to="/register"
                    className="text-[#319C69] hover:underline hover:text-[#218a57]"
                  >
                    Sign Up
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
