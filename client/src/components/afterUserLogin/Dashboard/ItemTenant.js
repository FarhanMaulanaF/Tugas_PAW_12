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
    <div className="grid font-bold w-full grid-cols-5 justify-between sm:text-base text-sm m-2">
      <div>pemasukan :+{props.itemData.pemasukan}</div>
      <div>pengeluaran :-{props.itemData.pengeluaran}</div>
      <div>date :{props.itemData.date}</div>
      <div>deskripsi :{props.itemData.deskripsi}</div>
      <div className=" flex justify-center items-center gap-5 flex-row">
        <img className="h-8" src={UpdateIcon}></img>
        <img
          className="cursor-pointer"
          onClick={handleDelete}
          src={TrashIcon}
        ></img>
      </div>
    </div>
  );
}
