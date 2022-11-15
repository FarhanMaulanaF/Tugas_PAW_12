import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { authenticate, isAuth } from "../../helpers/auth";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import UserCircle from "../../assets/UserCircle.svg";

const UserProfile = () => {
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
  });

  const { name, email, password1, password2 } = formData;
  const handleChange = (text) => (e) => {
    setFormData({ ...formData, [text]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && password1) {
      if (password1 === password2) {
        setFormData({ ...formData });
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
    <div className="font-Roboto">
      <Navbar />
      <div className="bg-[#F3F3F3] h-screen font-Roboto pt-28 px-16 pb-10">
        <div className="bg-white h-full grid md:grid-cols-2 gap-5 justify-between text-[#333333] w-full p-5 rounded-lg">
          <div className="items-center flex flex-col">
            <img src={UserCircle}  alt="UserCircle"
              className="w-60 h-60 mt-20 bg-[#319C69] rounded-full shadow"
            />
            <button className="items-center px-4 py-1 mt-5 rounded-md border-2 border-[#319C69] bg-white hover:bg-gray-200">
              Upload New Photo
            </button>
          </div>
          <form className="bg-white m-10 justify-center items-center" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2">
                Name
              </label>
              <input
                className="shadow border font-normal rounded-lg w-full py-3.5 px-3 text-gray-700 leading-tight focus:outline-none"
                id="name"
                type="text"
                onChange={handleChange("name")}
                value={name}
              />
            </div>
            <div className="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                className="shadow border font-normal rounded-lg w-full py-3.5 px-3 text-gray-700 leading-tight focus:outline-none"
                id="email"
                type="text"
                disabled
                value={email}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                className="shadow border font-normal rounded-lg w-full py-3.5 px-3 text-gray-700 leading-tight focus:outline-none"
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
                className="shadow border font-normal rounded-lg w-full py-3.5 px-3 text-gray-700 leading-tight focus:outline-none"
                id="password"
                type="password"
                placeholder="Confirm your password"
                onChange={handleChange("password2")}
              />
            </div>
            <div className="justify-end flex">
              <button className="items-center px-4 py-2 mt-5 rounded-md text-white bg-[#319C69] hover:bg-green-800">
              Update Profile </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;