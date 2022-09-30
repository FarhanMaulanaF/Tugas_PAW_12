import React, { useState, useEffect } from "react";

// import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import {
  updateUser,
  isAuth,
  getCookie,
  signout,
  updateUserImageProfile,
} from "../../../helpers/auth";

import InputForm from "./inputForm";
import { useNavigate } from "react-router-dom";

const PrivateContent = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    title: "",
    pemasukan:0,
    deskripsi: "",
    pengeluaran:0,
    tabungan: 0,
    date:""

  });
  
  useEffect(() => {
  
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  const {
    title,
    pemasukan,
     deskripsi,
     pengeluaran,
     tabungan,
     date,
  } = formData;
  //handleValue
  const handleChange = (text) => (e) => {
    setFormData({ ...formData, [text]: e.target.value });
  };
  


  
  const handleSubmit = (e) => {
    const token = getCookie("token");

    console.log(isAuth());
    console.log(token);
    e.preventDefault();
    if (title !== "") {
     
        setFormData({ ...formData, textChange: "Submitting" });
        // setLoading(true);
        axios
          .post(
            `${process.env.REACT_APP_API_URL}/addpost/${isAuth()._id}`,
            {
              title,
              pemasukan,
               deskripsi,
               pengeluaran,
               tabungan,
               date,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then((res) => {
       
              console.log("Transaksi berhasil ditambahkan");
              console.log(res)
              setFormData({ ...formData, textChange: "Update" });
              navigate("/transaksi")
            
          })
          .catch((err) => {
            // setFormData({
            //   ...formData,

            //   institusi: "",
            //   password1: "",
            //   password2: "",
            // });
           
          });
      } 
     else {
      // toast.error("Title tidak boleh kosong");
    }
  };

  return (
    <div>
     
        <div className="px-12 py-12 flex flex-col items-start xl:grid xl:grid-cols-2 w-full">
          <form
            className="w-full justify-start flex-1 text-black"
            onSubmit={handleSubmit}
          >
            <div className="max-w-xs relative ">
              {/*<input
            disabled
            className='w-full px-6 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
            type='text'
            placeholder='Role'
            value={role}
          />*/}


              <InputForm
                type="text"
                placeholder="Title"
                onchange={handleChange("title")}
                value={title}
              />
             
              <InputForm
                type="text"
                placeholder="Deskripsi"
                onchange={handleChange("deskripsi")}
                value={deskripsi}
              />
              <InputForm
                type="number"
                placeholder="Pemasukan"
                onchange={handleChange("pemasukan")}
              />
              <InputForm
                type="number"
                placeholder="Pengeluaran"
                onchange={handleChange("pengeluaran")}
              />
              <h1>Selected Date : {date}</h1> \
              <input type= "date" onChange={handleChange("date")}/>

              <button
                type="submit"
                className=" mb-3 tracking-wide font-semibold bg-black text-gray-100 w-full py-4 rounded-lg hover:bg-gray-400 transition-all duration-300 ease-in-out xl:flex items-center justify-center focus:shadow-outline focus:outline-none"
              >
                <i className="fas fa-user-plus fa 1x w-6  -ml-2" />
                <span className="ml-3">Tambahkan Transaksi</span>
              </button>
            </div>
          </form>

          
          {/* <form
        className='w-full flex-1 mt-8 text-nesco-bg-blue'
        onSubmit={handleSubmits}
      >
                                

        <div className='mx-auto max-w-sm relative '>
          <span className="font-medium ">
            Upload Foto Profil
          </span>

          <input
            type="file"
            accept=".png, .jpg, .jpeg"
            name="photo"
            onChange={handlePhoto}
          />
          <div className=' xl:grid xl:grid-cols-2 xl:gap-3 w-full'>
            <button
              type='submit'
              className='w-full xl:w-auto my-5 tracking-wide font-semibold bg-nesco-bg-blue text-gray-100 py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none'
            >

              <p>Upload Gambar</p>
            </button>
            <button type='button' className='w-full xl:w-auto my-5 tracking-wide font-semibold bg-pink-500 text-gray-100 py-4 rounded-lg hover:bg-pink-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none'
              onClick={() => handleDeleteF1()}>
              <p>Delete</p>
            </button>
            <button
            onClick={handleSubmit}
            className='flex mt-12 tracking-wide font-semibold bg-nesco-bg-blue text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out xl:hidden items-center justify-center focus:shadow-outline focus:outline-none'
          >
            <i className='fas fa-user-plus fa 1x w-6  -ml-2' />
            <span className='ml-3'>{textChange}</span>
          </button>
          </div>

        </div>


      </form> */}
        </div>
      
    </div>
  );
};

export default PrivateContent;
