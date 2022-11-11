import React, { useState, useEffect } from "react";
import DropDownList from "./categorylabel.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import {
  updateUser,
  isAuth,
  getCookie,
  signout,
  updateUserImageProfile,
} from "../../helpers/auth";
const AddTransaction = ({ visible, onClose }) => {
  const navigate = useNavigate();
  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };
  const [formData, setFormData] = useState({
    title: "",
    pemasukan: 0,
    deskripsi: "",
    pengeluaran: 0,
    tabungan: 0,
    date: "",
    label: "",
    kategori: "",
  });
  const {
    title,
    pemasukan,
    deskripsi,
    label,
    kategori,
    pengeluaran,
    tabungan,
    date,
  } = formData;
  useEffect(() => {
    console.log(formData);
  }, [label]);
  const category = [
    { label: "Expense", value: "expense" },
    { label: "Income", value: "income" },
  ];
  const [categoryState, setCategoryState] = React.useState("");
  const handleChange = (text) => (e) => {
    setFormData({ ...formData, [text]: e.target.value });
  };
  if (!visible) return null;

  const handleSubmit = (e) => {
    const token = getCookie("token");
    console.log(formData);
    console.log(isAuth());
    console.log(token);
    e.preventDefault();

    setFormData({ ...formData, textChange: "Submitting" });
    if (!title == "") {
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
          onClose();
          setFormData({ ...formData, textChange: "Update" });
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
      toast.error("Title tidak boleh kosong");
    }
  };
  return (
    <div
      id="container"
      className="font-Roboto fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center"
    >
      <div className="bg-white p-5 rounded-lg w-[24rem] h-3/5 flex flex-col">
        <ToastContainer />
        <div className="font-bold text-xl">Add Transaction</div>
        <div className="flex flex-col mt-3 items-center">
          <div className="w-5/6"></div>
          <form onSubmit={handleSubmit}>
            <select
              name="By Labels"
              onChange={handleChange("label")}
              className="py-0.5 px-2 mt-4 w-5/6 border border-black rounded-lg text-gray-700 focus:outline-none"
            >
              <option value="" disabled selected hidden>
                Label
              </option>
              <option value="expense"> Expense </option>
              <option value="income"> Income </option>
            </select>
            <select
              name="By Date Range"
              onChange={handleChange("kategori")}
              className="py-0.5 px-2 mt-4 w-5/6 border border-black rounded-lg text-gray-700 focus:outline-none"
            >
              <option value="" disabled selected hidden>
                Category
              </option>
              {label === "expense" ? (
                <>
                  <option value="food and drink"> Food and Drink </option>
                  <option value="shopping"> Shopping </option>
                  <option value="transport"> Transport </option>
                  <option value="entertaiment"> Entertaiment </option>
                  <option value="family"> Family </option>
                  <option value="others"> Others </option>
                </>
              ) : (
                <>
                  <option value="salary"> Salary </option>
                  <option value="gift"> Gift </option>
                  <option value="other"> Other </option>
                </>
              )}
            </select>
            <input
              className="py-0.5 px-2 mt-4 w-5/6 border border-black rounded-lg text-gray-700"
              id="amount"
              type="text"
              value={title}
              placeholder="title"
              onChange={handleChange("title")}
            ></input>
            <input
              className="py-0.5 px-2 mt-4 w-5/6 border border-black rounded-lg text-gray-700"
              id="amount"
              type="number"
              value={pengeluaran}
              placeholder="Pengeluaran"
              onChange={handleChange("pengeluaran")}
            ></input>
            <input
              className="py-0.5 px-2 mt-4 w-5/6 border border-black rounded-lg text-gray-700"
              id="amount"
              type="number"
              value={pemasukan}
              placeholder="Pemasukan"
              onChange={handleChange("pemasukan")}
            ></input>
            <input
              value={deskripsi}
              className="py-0.5 px-2 mt-4 w-5/6 border border-black rounded-lg text-gray-700"
              id="description"
              onChange={handleChange("deskripsi")}
              type="text"
              placeholder="Add description"
            ></input>
            <input
              type="date"
              className="py-0.5 px-2 mt-4 w-5/6 border border-black rounded-lg text-gray-700"
              onChange={handleChange("date")}
            />
            <button
              type="submit"
              className="bg-[#319C69] hover:bg-green-800 text-white mt-4 w-1/3 py-1 rounded"
            >
              Done
            </button>
            <div className="flex w-5/6 justify-between">
              <button
                type="button"
                onClick={onClose}
                className="bg-black hover:bg-green-800 text-white mt-4 w-1/3 py-1 rounded"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AddTransaction;
