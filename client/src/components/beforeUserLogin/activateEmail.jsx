import React, { useState, useEffect } from "react";

import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { authenticate, isAuth } from "../../helpers/auth";
import { Link, useNavigate, useMatch, useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import LoadingSpinner from "../../components/LoadingSpinner";
import GambarBoneka from "../../assets/Gambar Boneka.svg";


const Activate = () => {
  const tittle = "Redirect to Login Page";
  const [loading, setLoading] = useState(false);
  let { token } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuth()) {
      navigate("/beranda");
    }
  });

  const [formData, setFormData] = useState({
    name: "",
    token: "",
    show: true
  });

  useEffect(
    () => {
      console.log(token);
      let test = jwt_decode(token);
      console.log(test);
      //get the tokeb to be send in the backend
      if (token) {
        setFormData({ ...formData, name, token });
      }
      console.log(token, name);
    },
    [token]
  ); // eslint-disable-line react-hooks/exhaustive-deps
  const { name, show } = formData;

  const handleSubmit = e => {
    e.preventDefault();
    //send the token the activation API backend
    axios
      .post(`${process.env.REACT_APP_API_URL}/activation`, {
        token
      })
      .then(res => {
        setFormData({
          ...formData,
          show: false
        });

        toast.success(res.data.message);
        console.log(
          "Anda berhasil mengaktivasikan akun. Silakan kembali ke halaman utama untuk sign-in"
        );
        setLoading(true);
        setTimeout(() => {
          navigate("/login");
          setLoading(true);
        }, 2000);
      })
      .catch(err => {
        toast.error(err.response.data.errors);
      });
  };

  const [Submited] = useState(false);
  return (
    <div>
      {loading
        ? <LoadingSpinner tittle={tittle} />
        : <div className="h-screen bg-white grid grid-cols-2 ">
            <div className="bg-[#319C69] justify-center items-center flex">
              <div className="w-2/3 h-2/3">
                <h1 className="text-3xl text-white text-center  font-bold">
                  Nama App
                </h1>
                <img src={GambarBoneka} alt="Gambar Login" className="mt-12" />
              </div>
            </div>
            <div className="bg-white justify-center items-center flex">
              {Submited
                ? <div className="w-2/3 h-2/3 mt-64">
                    <h1 className="text-3xl text-black text-center font-bold mb-7">
                      Almost done!
                    </h1>
                    <p className="text-xl text-black text-center mb-7">
                      Click the button below to activate your account.
                    </p>
                    <button className="border rounded-lg text-white bg-[#333333] hover:bg-black w-full py-3.5">
                      Activate Account
                    </button>
                  </div>
                : <div className="w-2/3 h-2/3 mt-96">
                    <h1 className="text-4xl text-black text-center font-bold mb-10">
                      Email has been sent!
                    </h1>
                    <p className="text-xl text-black text-center">
                      Check your email to activate your account.
                    </p>
                  </div>}
            </div>
          </div>}
    </div>
  );
};

export default Activate;
