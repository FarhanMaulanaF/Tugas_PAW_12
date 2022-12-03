import { useState, useEffect } from "react";
import Trash from "../../../assets/AfterUserLogin/Trash.svg";
import PencilLine from "../../../assets/AfterUserLogin/PencilLine.svg";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import {
  updateUser,
  isAuth,
  getCookie,
  signout,
  updateUserImageProfile,
} from "../../../helpers/auth";

export default function ItemTenant(props, test) {
  useEffect(() => {}, []);
  const [deleted, setDeleted] = useState(false);

  const handleOpenWarning = (e) => {
    setDeleted(!deleted);
  };

  const handleDelete = (e) => {
    const token = getCookie("token");

    console.log(isAuth());
    console.log(token);

    const title = props.itemData.title;
    const label = props.itemData.label;
    const kategori = props.itemData.kategori;
    const pemasukan = props.itemData.pemasukan;
    const pengeluaran = props.itemData.pengeluaran;
    const tabungan = props.itemData.tabungan;
    const deskripsi = props.itemData.deskripsi;
    const _id = props.itemData._id;

    // setLoading(true);
    axios
      .put(
        `${process.env.REACT_APP_API_URL}/deletepost/${isAuth()._id}`,
        {
          title,
          label,
          kategori,
          pemasukan,
          deskripsi,
          pengeluaran,
          tabungan,
          _id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log("Transaksi berhasil dihapus");
        console.log(res);
        window.location.reload();
        toast.success("Transaksi berhasil dihapus");
      })
      .catch((err) => {
        // setFormData({
        //   ...formData,
        //   institusi: "",
        //   password1: "",
        //   password2: "",
        // });
      });
  };
  const [src, setSrc] = useState(
    `/data/tenant/${props.itemData.id_tenant}/${props.itemData.tenantLogo}`
  );
  console.log(src);
  console.log(props.pemasukan);
  return (
    <>
      {deleted ? (
        <>
          <div className="absolute bg-gray-500   -translate-y-72  bg-opacity-0 flex justify-center items-center h-full w-full">
            <div className="md:w-1/2 w-[75%] h-[60%] lg:h-1/2 flex justify-center items-center">
              <div className="w-3/4 rounded-md outline outline-2  bg-gray-200 px-5 flex flex-col justify-center items-center h-1/2">
                <div className="text-black mb-5">
                  Are you sure to delete this transaction?
                </div>
                <div className="flex w-[70%] items-center justify-between">
                  <button
                    onClick={handleOpenWarning}
                    className="bg-white rounded-md w-[40%]"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleDelete}
                    className="bg-[#319C69] rounded-md w-[40%]"
                  >
                    Yes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}

      <div
        className={
          props.itemData.label === "income"
            ? "grid font-bold border-green-400 rounded-md px-2 items-center border-2 w-full grid-cols-6 justify-between sm:text-base text-sm my-2 ml-5"
            : "grid font-bold border-red-400 rounded-md px-2 items-center border-2 w-full grid-cols-6 justify-between sm:text-base text-sm my-2 ml-5"
        }
      >
        <div className="ml-5">{props.itemData.label}</div>
        <div className="flex capitalize">
          <img src={`/transaction/${props.itemData.kategori}.svg`}></img>
          {props.itemData.kategori}
        </div>

        {props.itemData.label === "income" ? (
          <>
            <div className="text-green-500">
              +Rp. {props.itemData.pemasukan}
            </div>
          </>
        ) : (
          <></>
        )}
        {props.itemData.label === "expense" ? (
          <>
            <div className="text-red-400">
              -Rp. {props.itemData.pengeluaran}
            </div>
          </>
        ) : (
          <></>
        )}

        <div>{props.itemData.date}</div>
        <div>{props.itemData.deskripsi}</div>
        <div className=" flex justify-center items-center gap-5 flex-row">
          <img
            className="cursor-pointer"
            onClick={handleOpenWarning}
            src={Trash}
            alt="Trash Icon"
          ></img>
        </div>
      </div>
    </>
  );
}
