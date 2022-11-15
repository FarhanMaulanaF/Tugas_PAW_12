import React, { useState, useEffect } from "react";
import GambarOrang from "../../assets/Gambar Orang.svg";
import { ToastContainer, toast } from "react-toastify";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
const ForgotPassword = () => {
  const [formData, setFormData] = useState({
    email: "",
    textChange: "Submit",
  });
  const { email } = formData;
  const handleChange = (text) => (e) => {
    setFormData({ ...formData, [text]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setFormData({ ...formData, textChange: "Submitting" });
      axios
        .put(`${process.env.REACT_APP_API_URL}/forgotpassword`, {
          email,
        })
        .then((res) => {
          setFormData({
            ...formData,
            email: "",
          });
          toast.success(
            `Link reset password terkirim ke email anda. Pesan dapat berada di folder spam`
          );
        })
        .catch((err) => {
          console.log(err.response);
          toast.error(err.response.data.error);
        });
    } else {
      toast.error("Isikan semua informasi");
    }
  };

  const [Submited] = useState(false);
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
      <div className="bg-white justify-center items-center flex">
        {!Submited ? (
          <div className="w-2/3 h-fit py-16 md:py-0">
            <h1 className="text-2xl md:text-3xl text-black text-center font-bold mb-10">
              Forgot your password?
            </h1>
            <div>
              <form onSubmit={handleSubmit}>
                <div className="mb-10">
                  <label class="block text-gray-700 text-sm font-bold mb-2">
                    Email
                  </label>
                  <input
                    className="shadow border rounded-lg w-full py-3.5 px-3 text-gray-700 leading-tight focus:outline-none"
                    id="email"
                    type="text"
                    placeholder="Enter your email"
                    onChange={handleChange("email")}
                    value={email}
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="border rounded-lg text-white text-sm bg-[#333333] hover:bg-black w-full py-3.5"
                  >
                    Sent confirmation email
                  </button>
                </div>
                <div />
              </form>
            </div>
          </div>
        ) : (
          <div className="w-2/3 h-fit py-16 md:py-0">
            <h1 className="text-3xl md:text-4xl text-black text-center font-bold mb-10">
              Email has been sent!
            </h1>
            <p className="text-lg md:text-xl text-black text-center">
              Check your email to continue reset your password.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
