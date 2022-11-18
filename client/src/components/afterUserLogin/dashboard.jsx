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
import CheckCircle from "../../assets/CheckCircle (1).png";
import Navbar from "./navbar";
import BarData from "../chart/page/BarData";
import Burger from '../../assets/Icon.svg'


import { ToastContainer, toast } from "react-toastify";

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
  const [startBalance, setStartingBalance] = useState(false);
  const [isRendered, setRendered] = useState(false);
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
    initialValue: "",
    isHavingInit: "",
  });
  const [newUser, setNewUser] = useState({
    photo: "",
  });

  const { initialValue, isHavingInit } = formData;

  useEffect(() => {
    setTimeout(() => {
      setRendered(true);
    }, 1000);
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
          isHavingInit,
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
          isHavingInit,
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

        console.log("test iin adalah useEffect");
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
  const AddInitalValue = () => {
    const token = getCookie("token"); //mengambil token yang disimpan di dalam cookie
    if (initialValue < 0) {
      return toast.error("Nominal harus lebih dari sama dengan 0");
    }
    const isHavingInit = true;
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/addinitial/${isAuth()._id}`,
        {
          initialValue,
          isHavingInit,
        },
        {
          headers: {
            // masih bingung gunanya headers ?
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        const data = res.data;
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
  const handleChange = (text) => (e) => {
    setFormData({ ...formData, [text]: e.target.value });
  };
  const { name, email, textChange, pemasukan, pengeluaran, tabungan } =
    formData;

  return (
    <div className="font-Roboto">
      <Navbar />

      <div className="md:h-screen bg-[#F3F3F3] flex-none md:flex font-Roboto pt-20 md:pt-32 px-5 md:px-16 pb-10 text-xl">
        <div className="text-black font-black w-[100%] md:w-2/3 pr-0 md:pr-5">
          <ToastContainer />
          <div className="bg-white h-40 md:h-[15%] rounded-lg flex justify-between px-5 w-full items-center md:items-start md:pt-5">
            <div className="gap-8 md:gap-0 flex justify-between pl-5 pr-10 md:pr-24 w-full">
              <div className="ml-4 items-center w-fit ">
                Your Money
                <div className="font-medium h-3/5 place-items-start flex items-center">
                  {!isHavingInit ? (
                    <>
                      {" "}
                      {!startBalance ? (
                        <>
                          <button
                            onClick={(e) => setStartingBalance(true)}
                            className=" bg-[#319C69]   place-items-start rounded-md px-2 py-1 items-center text-white flex font-normal text-base"
                          >
                            <img
                              className="mr-1 "
                              src={PlusCircle}
                              alt="PlusCircle"
                            />
                            <div className="bg-[#319C69] flex  ">
                              Add your starting balance
                            </div>
                          </button>
                        </>
                      ) : (
                        <div className="bg-[#319C69] text-base font-normal justify-between focus:border-none rounded-md  w-[20rem] h-[40%] flex py-[0.30rem] px-2 ">
                          <form
                            onSubmit={AddInitalValue}
                            className="flex w-full justify-between"
                          >
                            <input
                              placeholder="Input your starting balance"
                              onChange={handleChange("initialValue")}
                              value={initialValue}
                              type="number"
                              className="bg-white rounded-md w-[80%] px-2 h-full"
                            ></input>
                            <button type="submit" className="h-fit">
                              <img
                                className="h-6 cursor-pointer"
                                src={CheckCircle}
                              ></img>
                            </button>
                            <img
                              onClick={(e) => setStartingBalance(false)}
                              className="cursor-pointer"
                              src={CheckCircle}
                            ></img>
                          </form>
                        </div>
                      )}
                    </>
                  ) : (
                    <div>{tabungan}</div>
                  )}
                </div>
              </div>
              <div className="">
                Total Expense
                <div className="font-medium grid h-3/5 place-items-start items-center text-xl ">
                  Rp {pengeluaran}
                </div>
              </div>
              <div className="">
                Total Income
                <div className="font-medium grid h-3/5  place-items-start items-center text-xl ">
                  Rp {pemasukan}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 bg-white flex flex-col  h-[83%] rounded-lg">
            <div className="mx-12 mt-12 justify-between flex ">
              <p>Transactions</p>
              {isHavingInit ? (
                <>
                  {" "}
                  <NavLink to="/transactions">
                    <button className=" bg-[#319C69]   place-items-start rounded-md px-2 py-1 items-center text-white flex font-normal text-base">
                      <img
                        className="mr-1 "
                        src={PlusCircle}
                        alt="PlusCircle"
                      />
                      <div>New Transaction</div>
                    </button>
                  </NavLink>
                </>
              ) : (
                <div className="bg-white place-items-start rounded-md px-2 py-1 items-center text-white flex font-normal text-base">
                  {" "}
                  Anda belum memberikan nilai awal tabungan
                </div>
              )}
            </div>
            <MapTenant tenantList={dataTransaksi}></MapTenant>
          </div>
        </div>
        <div className=" text-black font-black bg-white md:h[100%] md:w-1/3 rounded-lg w-[100%]">
          <div className="pl-10 pt-5 md:pt-0 mt-5 ">Statistics</div>
          <div className="flex w-[95%] h-4/5 justify-center items-center font-extralight text-base pl-5">
            {isRendered ? (
              <>
                {" "}
                <BarData pemasukan={pemasukan} pengeluaran={pengeluaran} />
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
