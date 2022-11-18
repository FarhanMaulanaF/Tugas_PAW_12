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
          <div className="text-green-500">+Rp. {props.itemData.pemasukan}</div>
        </>
      ) : (
        <></>
      )}
      {props.itemData.label === "expense" ? (
        <>
          <div className="text-red-400">-Rp. {props.itemData.pengeluaran}</div>
        </>
      ) : (
        <></>
      )}

      <div>{props.itemData.date}</div>
      <div>{props.itemData.deskripsi}</div>
      <div className=" flex justify-center items-center gap-5 flex-row">
        <img
          className="cursor-pointer"
          onClick={handleDelete}
          src={Trash}
          alt="Trash Icon"
        ></img>
      </div>
    </div>
  );
}
