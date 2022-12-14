import React, { useState, useEffect } from "react";

import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { authenticate, isAuth } from "../../helpers/auth";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import GambarBoneka from "../../assets/Gambar Boneka.svg";

const Register = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuth()) {
      navigate("/dashboard");
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
            setSubmited(true);
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

  const [Submited, setSubmited] = useState(false);
  return (
    <div className="h-screen bg-white grid md:grid-cols-2 font-Roboto">
      <div className="bg-[#319C69] justify-center items-center flex">
        <ToastContainer />
        <div className="w-2/3 h-full py-16 flex-col flex items-center justify-center md:py-0 md:h-2/3">
          <h1 className="text-2xl md:text-3xl text-white text-center  font-bold">
            Pristin
          </h1>
          <img src={GambarBoneka} alt="Gambar Login" className="mt-12" />
        </div>
      </div>
      <div className="bg-white justify-center items-center flex">
        {!Submited ? (
          <div className="w-2/3 h-fit py-16 md:py-0">
            <h1 className="text-2xl md:text-3xl text-black text-center font-bold mb-10">
              Create your account!
            </h1>
            <div className="h-full">
              <form className="h-full flex flex-col" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label class="block text-gray-700 text-sm font-bold mb-2">
                    Name
                  </label>
                  <input
                    className="shadow border rounded-lg w-full py-3.5 px-3 text-gray-700 leading-tight focus:outline-none"
                    id="name"
                    type="text"
                    onChange={handleChange("name")}
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mb-4">
                  <label class="block text-gray-700 text-sm font-bold mb-2">
                    Email
                  </label>
                  <input
                    className="shadow border rounded-lg w-full py-3.5 px-3 text-gray-700 leading-tight focus:outline-none"
                    id="email"
                    type="text"
                    onChange={handleChange("email")}
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Password
                  </label>
                  <input
                    className="shadow border rounded-lg w-full py-3.5 px-3 text-gray-700 leading-tight focus:outline-none"
                    id="password"
                    type="password"
                    onChange={handleChange("password1")}
                    placeholder="Enter your password"
                  />
                </div>
                <div className="mb-10">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Confirm Password
                  </label>
                  <input
                    className="shadow border rounded-lg w-full py-3.5 px-3 text-gray-700 leading-tight focus:outline-none"
                    id="password"
                    type="password"
                    placeholder="Confirm your password"
                    onChange={handleChange("password2")}
                  />
                </div>
                <div className="mb-5">
                  <button
                    type="submit"
                    className="border rounded-lg text-white bg-[#333333] hover:bg-black w-full py-3.5"
                  >
                    Sign up
                  </button>
                </div>
                <div>
                  <p className="text-center">
                    Already have account?&nbsp;
                    <Link
                      to="/login"
                      className="text-[#319C69] hover:underline hover:text-[#218a57]"
                    >
                      Sign In
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <div className="w-2/3 h-fit py-16 md:py-0">
            <h1 className="text-3xl md:text-4xl text-black text-center font-bold mb-10">
              Email has been sent!
            </h1>
            <p className="text-lg md:text-xl text-black text-center">
              Check your email to activate your account.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;
