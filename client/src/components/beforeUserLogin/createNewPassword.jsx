import React, { useState, useEffect } from "react";
import GambarOrang from "../../assets/Gambar Orang.svg";

import jwt_decode from "jwt-decode";
import { Link, useParams, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const CreateNewPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    password1: "",
    password2: "",
    textChange: "Submit",
  });
  const { password1, password2 } = formData;
  useEffect(() => {
    try {
      let test = jwt_decode(token);
      console.log(test);
    } catch {
      //kalau misal ngisi parameter :token nya bukan token langsung ditendang
      navigate("/");
    }
  });

  const handleChange = (text) => (e) => {
    setFormData({ ...formData, [text]: e.target.value });
  };
  const handleSubmit = (e) => {
    console.log(password1, password2);
    e.preventDefault();
    if (password1 === password2 && password1 && password2) {
      setFormData({ ...formData, textChange: "Submitting" });
      axios
        .put(`${process.env.REACT_APP_API_URL}/resetpassword`, {
          newPassword: password1,
          resetPasswordLink: token,
        })
        .then((res) => {
          console.log(res.data.message);
          setFormData({
            ...formData,
            password1: "",
            password2: "",
          });
          toast.success(res.data.message);
        })
        .catch((err) => {
          toast.error("Terdapat kesalahan, silakan coba kembali");
        });
    } else {
      toast.error("Kedua password tidak sesuai");
    }
  };
  return (
    <div className="h-screen bg-white grid md:grid-cols-2 font-Roboto">
      <div className="bg-[#319C69] justify-center items-center flex">
        <ToastContainer />
        <div className="w-2/3 h-full py-16 flex-col flex items-center justify-center md:py-0 md:h-2/3">
          <h1 className="text-2xl md:text-3xl text-white text-center  font-bold">
            Nama App
          </h1>
          <img src={GambarOrang} alt="Gambar Login" className="mt-12" />
        </div>
      </div>
      <div className="bg-white justify-center items-center flex mt-auto mb-auto">
        <div className="w-2/3 h-fit py-16 md:py-0">
          <h1 className="text-2xl md:text-3xl text-black text-center font-bold mb-10">
            Create your new password
          </h1>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="mb-4 text-sm">
                <label class="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
                <input
                  className="shadow border rounded-lg w-full py-3.5 px-3 text-gray-700 leading-tight focus:outline-none"
                  id="password"
                  type="password"
                  onChange={handleChange("password1")}
                  value={password1}
                  placeholder="Enter your new password"
                />
              </div>
              <div className="mb-5">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Confirm Password
                </label>
                <input
                  className="shadow border rounded-lg w-full py-3.5 px-3 text-gray-700 mb-3 leading-tight focus:outline-none"
                  id="password"
                  type="password"
                  value={password2}
                  onChange={handleChange("password2")}
                  placeholder="Confirm your new password"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="border rounded-lg text-white bg-[#333333] hover:bg-black w-full py-3.5"
                >
                  Reset your password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNewPassword;
