import React, { useState, useEffect } from "react";
import MapTenant from "./Dashboard/mapTenant";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import {
  updateUser,
  isAuth,
  getCookie,
  signout,
  updateUserImageProfile,
} from "../../../src/helpers/auth";
import { useNavigate } from "react-router-dom";
import UserCircle from "../../assets/UserCircle.svg";
import PlusCircle from "../../assets/PlusCircle.svg";

import Navbar from "./navbar";

const Dashboard = () => {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();

  today = mm + "/" + dd + "/" + yyyy;
  console.log(today);
  const Navigate = useNavigate();
  const tittle = "Loading";
  const [dataTransaksi, setData] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password1: "",
    textChange: "Update",
    role: "",
    tabungan: "",
    pemasukan: "",
    pengeluaran: "",
    link_profil: "",
  });
  const [newUser, setNewUser] = useState({
    photo: "",
  });
  useEffect(() => {
    loadProfile();
    loadPost();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const loadProfile = () => {
    const token = getCookie("token"); //mengambil token yang disimpan di dalam cookie
    axios
      .get(`${process.env.REACT_APP_API_URL}/user/${isAuth()._id}`, {
        headers: {
          // masih bingung gunanya headers ?
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const {
          role,
          name,
          email,
          link_profil,
          institusi,
          pemasukan,
          pengeluaran,
          tabungan,
        } = res.data;
        setFormData({
          ...formData,
          role,
          name,
          email,
          institusi,
          pemasukan,
          pengeluaran,
          tabungan,
          link_profil,
        });
      })
      .catch((err) => {
        // toast.error(`Error To Your Information ${err.response.statusText}`);
        if (err.response.status === 401) {
          signout(() => {
            Navigate("/login");
          });
        }
      });
  };
  const loadPost = () => {
    const token = getCookie("token"); //mengambil token yang disimpan di dalam cookie
    axios
      .get(`${process.env.REACT_APP_API_URL}/readpost/${isAuth()._id}`, {
        headers: {
          // masih bingung gunanya headers ?
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const data = res.data;
        console.log(data);
        setData(res.data);
        console.log(dataTransaksi);
      })
      .catch((err) => {
        // toast.error(`Error To Your Information ${err.response.statusText}`);
        if (err.response.status === 401) {
          signout(() => {
            Navigate("/login");
          });
        }
      });
  };
  const { name, email, textChange, pemasukan, pengeluaran, tabungan } =
    formData;

  return (
    <div className="font-Roboto">
      <Navbar />

      <div className="h-screen flex font-Roboto pt-44 px-16 pb-10 text-xl">
        <div className="text-black font-black w-2/3 pr-5">
          <div className="bg-[#D9D9D9] h-[25%] rounded-lg flex justify-between px-5 w-full">
            <div className=" flex justify-between pl-5 pr-24 w-full">
              <div className="mt-5 ml-4 items-center w-fit ">
                Your Money
                <div className="h-3/5 place-items-start flex items-center">
                  <button className=" bg-[#319C69]   place-items-start rounded-md px-2 py-1 items-center text-white flex font-normal text-base">
                    <img className="mr-1 " src={PlusCircle} alt="PlusCircle" />
                    <div>Add your starting balance</div>
                  </button>
                </div>
              </div>
              <div className="mt-5">
                Total Expense
                <div className="grid h-3/5 place-items-start items-center font-bold text-xl ">
                  Rp {pengeluaran}
                </div>
              </div>
              <div className="mt-5">
                Total Income
                <div className="grid h-3/5  place-items-start items-center font-bold text-xl ">
                  Rp {pemasukan}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 bg-[#D9D9D9] overflow-scroll h-[72%] rounded-lg">
            <div className="mx-12 mt-12 justify-between flex ">
              <p>Transactions</p>
              <NavLink to="/transactions">
                <button className=" bg-[#319C69]   place-items-start rounded-md px-2 py-1 items-center text-white flex font-normal text-base">
                  <img className="mr-1 " src={PlusCircle} alt="PlusCircle" />
                  <div>New Transaction</div>
                </button>
              </NavLink>
            </div>
            <MapTenant tenantList={dataTransaksi}></MapTenant>
          </div>
        </div>
        <div className=" text-black font-black bg-[#D9D9D9] w-1/3 rounded-lg">
          <div className="pl-10">Statistics</div>
          <div className="grid h-4/5 place-items-center font-extralight text-base">
            No statictics to display.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
