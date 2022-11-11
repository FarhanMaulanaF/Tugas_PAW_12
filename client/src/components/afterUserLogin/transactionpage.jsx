import React from "react";
import UserCircle from "../../assets/UserCircle.svg";
import PlusCircle from "../../assets/PlusCircle.svg";
import Faders from "../../assets/Faders.svg";
import AddTransaction from "../afterUserLogin/addtransaction.jsx";
import { useState, useEffect } from "react";
import FadersWhite from "../../assets/FadersWhite.svg";
import Navbar from "./navbar";
import MapTenant from "./Dashboard/mapTenant";
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
  const Navigate = useNavigate();
  useEffect(() => {
    if (props == "true") {
      setShowAddTransaction(!showAddTransaction);
      console.log(filter);
    }
    loadPost();
  }, []);
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

      <div className="h-screen flex font-Roboto pt-44 px-16 pb-10 text-xl">
        <div className="bg-[#D9D9D9] text-black font-black w-full pr-5 rounded-lg">
          <div className="flex flex-wrap justify-between ml-5 mt-5">
            <div className="ml-10">Transactions</div>
            <div className="flex justify-between">
              <button
                onClick={() => setShowAddTransaction(true)}
                className="items-center bg-[#FFFFFF] text-[#686868] flex font-normal text-base rounded-lg px-2 py-1"
              >
                <img src={PlusCircle} alt="PlusCircle" />
                <div className="ml-2">Add Transaction</div>
              </button>
              <button
                onClick={(e) => {
                  setFilter(!filter);
                }}
                className="items-center bg-[#FFFFFF] text-[#686868] flex font-normal text-base rounded-lg ml-5 px-2 py-1"
              >
                <img src={Faders} alt="Faders" />
                <div className="ml-2">Filter</div>
              </button>
            </div>
          </div>
          <div className="flex justify-between ml-5 mt">
            {!filter ? (
              <></>
            ) : (
              <div className="ml-2 mt-2 flex justify-between bg-[#319C69] p-1.5 rounded-lg w-full">
                <label className="items-center text-[#FFFFFF] flex font-normal text-base rounded-lg px-2 py-1">
                  <img src={FadersWhite} alt="FadersWhite" />
                  <div className="ml-2 mr-10">Filter</div>
                </label>
                <select
                  name="By Category"
                  className="items-center bg-[#FFFFFF] text-[#000000] font-normal text-base rounded-lg ml-2 px-2 py-1 w-1/5 focus:outline-none"
                >
                  <option value="expense"> Expense </option>
                  <option value="income"> Income </option>
                </select>
                <select
                  name="By Labels"
                  className="items-center bg-[#FFFFFF] text-[#000000] font-normal text-base rounded-lg ml-2 px-2 py-1 w-1/5 focus:outline-none"
                >
                  <option value="food and drink"> Food and Drink </option>
                  <option value="shopping"> Shopping </option>
                  <option value="transport"> Transport </option>
                  <option value="entertaiment"> Entertaiment </option>
                  <option value="family"> Family </option>
                  <option value="others"> Others </option>
                </select>
                <select
                  name="By Date Range"
                  className="items-center bg-[#FFFFFF] text-[#000000] font-normal text-base rounded-lg ml-2 px-2 py-1 w-1/5 focus:outline-none"
                >
                  <option value="this week"> This Week </option>
                  <option value="last week"> Last Week </option>
                  <option value="this month"> This Month </option>
                  <option value="last month"> Last Month </option>
                </select>
                <input
                  className="text-[#000000] font-normal text-base rounded-lg ml-2 px-2 py-1 focus:outline-none w-2/5"
                  placeholder="By Description"
                />
              </div>
            )}
          </div>
          {!filter ? (
            <MapTenant tenantList={dataTransaksi}></MapTenant>
          ) : (
            <div className="grid h-4/5 place-content-center font-normal text-base">
              You have no transactions.
            </div>
          )}
        </div>
      </div>
      <AddTransaction onClose={handleOnClose} visible={showAddTransaction} />
    </div>
  );
};

export default Transaction;
