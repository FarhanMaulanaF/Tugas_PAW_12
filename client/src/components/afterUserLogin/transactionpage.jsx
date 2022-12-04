import React from "react";
import UserCircle from "../../assets/UserCircle.svg";
import PlusCircle from "../../assets/PlusCircle.svg";
import Faders from "../../assets/Faders.svg";
import AddTransaction from "../afterUserLogin/addtransaction.jsx";
import { useState, useEffect } from "react";
import FadersWhite from "../../assets/FadersWhite.svg";
import Navbar from "./navbar";
import MapTenant from "./Dashboard/mapTenant";
import FilterSection from "../User/Transaksi/mapTenant";

import {
  updateUser,
  isAuth,
  getCookie,
  signout,
  updateUserImageProfile,
} from "../../../src/helpers/auth";
import { useNavigate } from "react-router-dom";

import axios from "axios";
const Transaction = ({ props }) => {
  const [dataTransaksi, setData] = useState([]);
  const [showAddTransaction, setShowAddTransaction] = React.useState(false);
  const [filter, setFilter] = useState(false);
  const [click, setClicked] = useState(false);
  const Navigate = useNavigate();
  useEffect(() => {
    if (props == "true") {
      setShowAddTransaction(!showAddTransaction);
      console.log(filter);
    }
    loadPost();
  }, [click]);
  console.log(filter);
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
        console.log("INI ADALAH LOAD");
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
  const handleOnClose = () => {
    setShowAddTransaction(false);
    loadPost();
  };
  return (
    <div className="font-Roboto">
      <Navbar />
      <div className="bg-[#F3F3F3] h-screen flex font-Roboto pt-16 md:pt-28 md:px-16 md:pb-10 text-xl">
        <div className="bg-white h-full flex flex-col gap-5 justify-between text-[#333333] font-medium w-full pr-5 rounded-lg">
          <div className="flex flex-wrap justify-between ml-5 mt-5">
            <div className="ml-1.5 mt-1">Transactions</div>
            <div className="flex justify-between">
              <button
                onClick={() => setShowAddTransaction(true)}
                className="items-center bg-[#319C69] text-white hover:bg-green-800 flex font-normal text-base rounded-lg px-2 py-1"
              >
                <img src={PlusCircle} alt="PlusCircle" />
                <div className="ml-2 hidden xm:flex">Add Transaction</div>
                <div className="ml-2 flex xm:hidden">Add</div>
              </button>
              <button
                onClick={(e) => {
                  setFilter(!filter);
                }}
                className="items-center bg-[#319C69] text-white hover:bg-green-800 flex font-normal text-base rounded-lg ml-5 px-2 py-1"
              >
                <img src={FadersWhite} alt="Faders" />
                <div className="ml-2">Filter</div>
              </button>
            </div>
          </div>
          {!filter ? (
            <MapTenant
              tenantList={dataTransaksi}
              loadPosts={setClicked}
            ></MapTenant>
          ) : (
            <FilterSection tenantList={dataTransaksi} />
          )}
        </div>
      </div>
      <AddTransaction onClose={handleOnClose} visible={showAddTransaction} />
    </div>
  );
};

export default Transaction;
