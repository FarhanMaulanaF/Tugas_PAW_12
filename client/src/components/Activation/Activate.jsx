import React, { useState, useEffect } from "react";

import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { authenticate, isAuth } from "../helpers/auth";
import { Link, useNavigate, useMatch, useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import LoadingSpinner from "../components/LoadingSpiner";

import logoNesco from "../assets/logotc-big.png";

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
    show: true,
  });

  useEffect(() => {
    console.log(token);
    let test = jwt_decode(token);
    console.log(test);
    //get the tokeb to be send in the backend
    if (token) {
      setFormData({ ...formData, name, token });
    }
    console.log(token, name);
  }, [token]); // eslint-disable-line react-hooks/exhaustive-deps
  const { name, show } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    //send the token the activation API backend
    axios
      .post(`${process.env.REACT_APP_API_URL}/activation`, {
        token,
      })
      .then((res) => {
        setFormData({
          ...formData,
          show: false,
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
      .catch((err) => {
        toast.error(err.response.data.errors);
      });
  };

  return (
    <div>
      {loading ? (
        <LoadingSpinner tittle={tittle} />
      ) : (
        <header className="flex w-full bg-cover bg-gradient-to-r from-[#04102d] to-[#122857] ">
          <ToastContainer />
          <Link to="/">
            <img alt="" src={logoNesco} className="h-32"></img>
          </Link>
          <Link to="/">
            <h1 className=" text-white my-8 text-4xl">NESCO 2022</h1>
          </Link>

          <form
            onSubmit={handleSubmit}
            className="bg-nesco-cyan/30 backdrop-blur-md flex-1 h-1/3 max-h-96 w-2/3 max-w-xl rounded-3xl outline outline-2 outline-nesco-blue/80 p-6"
          >
            <div className=" h-9"></div>
            <p className="text-2xl xl:text-3xl text-center text-white">
              Selamat datang {name}
            </p>
            <div className=" h-9"></div>
            <div className=" mx-auto text-center">
              <button
                type="submit"
                className=" my-4 text-center mx-auto px-10 py-2 rounded-full text-white"
                style={{
                  background:
                    "linear-gradient(109.93deg, #FFA62E 10.81%, rgba(255, 166, 46, 0.7) 60.13%, rgba(255, 166, 46, 0.5) 92.27%)",
                }}
              >
                <h1>Aktivasi Akun</h1>
              </button>
              <div className=" h-9"></div>
              <Link to="/">
                <p className=" text-lg text-white">Kembali</p>
              </Link>
            </div>
          </form>
          {/*
      <div className='max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1'>
        <div className='lg:w-1/2 xl:w-5/12 p-6 sm:p-12'>
          <div className='mt-12 flex flex-col items-center'>
            <h1 className='text-2xl xl:text-3xl font-extrabold'>
              Selamat datang {name}
            </h1>

            <form
              className='w-full flex-1 mt-8 text-nesco-bg-blue'
              onSubmit={handleSubmit}
            >
              
              <div className='mx-auto max-w-xs relative '>
                <button
                  type='submit'
                  className='mt-5 tracking-wide font-semibold bg-nesco-bg-blue text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none'
                >
                  <i className='fas fa-user-plus fa 1x w-6  -ml-2' />
                  <span className='ml-3'>Aktivasi akun anda</span>
                </button>
              </div>
              <div className='my-12 border-b text-center'>
                <div className='leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2'>
                  Atau sign up 
                </div>
              </div>
              <div className='flex flex-col items-center'>
                <a
                  className='w-full max-w-xs font-bold shadow-sm rounded-lg py-3
           bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5'
                  href='/register'
                  target='_self'
                >
                  <i className='fas fa-sign-in-alt fa 1x w-6  -ml-2 text-nesco-bg-blue' />
                  <span className='ml-4'>Sign Up</span>
                </a>
              </div>
            </form>
          </div>
        </div>
        <div className='flex-1 bg-indigo-100 text-center hidden lg:flex'>
          <div
            className='m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat'
            style={{ backgroundImage: `url(${authSvg})` }}
          ></div>
        </div>
      </div> */}
        </header>
      )}
    </div>
  );
};

export default Activate;
