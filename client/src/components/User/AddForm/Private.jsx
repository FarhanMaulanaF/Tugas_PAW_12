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
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    pemasukan: 0,
    deskripsi: "",
    pengeluaran: 0,
    tabungan: 0,
    date: "",
  });

  useEffect(() => {}, []); // eslint-disable-line react-hooks/exhaustive-deps
  const { title, pemasukan, deskripsi, pengeluaran, tabungan, date } = formData;
  //handleValue
  const handleChange = (text) => (e) => {
    setFormData({ ...formData, [text]: e.target.value });
  };
  const handleChangeSelect = ({ text, e }) => {
    setFormData({ ...formData, [text]: e.target.value });
  };

  const handleSubmit = (e) => {
    const token = getCookie("token");
    console.log(formData);
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
          console.log(res);
          setFormData({ ...formData, textChange: "Update" });
          navigate("/transaksi");
        })
        .catch((err) => {
          // setFormData({
          //   ...formData,
          //   institusi: "",
          //   password1: "",
          //   password2: "",
          // });
        });
    } else {
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
            <input className="" type="date" onChange={handleChange("date")} />
            <button
              type="submit"
              className=" mb-3 tracking-wide font-semibold bg-black text-gray-100 w-full py-4 rounded-lg hover:bg-gray-400 transition-all duration-300 ease-in-out xl:flex items-center justify-center focus:shadow-outline focus:outline-none"
            >
              <i className="fas fa-user-plus fa 1x w-6  -ml-2" />
              <span className="ml-3">Tambahkan Transaksi</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PrivateContent;
