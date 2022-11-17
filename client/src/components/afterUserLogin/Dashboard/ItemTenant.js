import { useState, useEffect } from "react";
import TrashIcon from "../../../assets/AfterUserLogin/Trash.png";
import UpdateIcon from "../../../assets/AfterUserLogin/Update.png";
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
    <div className="flex flex-row font-regular w-full sm:text-base text-sm m-2">
      <div className="w-1/4">Pemasukan :+{props.itemData.pemasukan}</div>
      <div className="w-1/4">Pengeluaran :-{props.itemData.pengeluaran}</div>
      <div className="w-1/4">date :{props.itemData.date}</div>
      <div className="w-1/4">deskripsi :{props.itemData.deskripsi}</div>
      <div className=" flex justify-end items-center gap-5 flex-row">
        <img className="h-5" src={UpdateIcon}></img>
        <img
          className="h-6 cursor-pointer"
          onClick={handleDelete}
          src={TrashIcon}
        ></img>
      </div>
    </div>
  );
}
