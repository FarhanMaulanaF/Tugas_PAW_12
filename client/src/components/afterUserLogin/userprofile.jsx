import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  updateUser,
  isAuth,
  getCookie,
  signout,
  updateUserImageProfile,
} from "../../helpers/auth";

import UserCircle from "../../assets/UserCircle.svg";

const UserProfile = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const tittle = "Loading";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password1: "",
    textChange: "Update",
    institusi: "",
    role: "",

    link_profil: "",
  });
  const [newUser, setNewUser] = useState({
    photo: "",
  });
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
    loadProfile();
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
        // setLoading(false);
        const { role, name, email, link_profil } = res.data;
        setFormData({ ...formData, role, name, email, link_profil });
      })
      .catch((err) => {
        toast.error(`Error To Your Information ${err.response.statusText}`);
        if (err.response.status === 401) {
          signout(() => {
            navigate("/login");
          });
        }
      });
  };
  const {
    name,
    email,
    password1,
    password2,
    textChange,
    institusi,
    link_profil,
    role,
  } = formData;
  const handleChange = (text) => (e) => {
    setFormData({ ...formData, [text]: e.target.value });
  };

  const handleSubmits = (e) => {
    toast.info(
      "Proses upload membutuhkan waktu. Tunggu hingga notifikasi terunggah muncul "
    );
    const token = getCookie("token");
    console.log(token);
    e.preventDefault();
    const image = newUser.photo;

    const formData = new FormData();
    formData.append("file", image);
    axios
      .post(`${process.env.REACT_APP_API_URL}/upload`, formData, {
        headers: {
          Authorization: `Bearer ${token}`, //apakah berhubungan dengan JWT ? yea ternyata berhubungan pada JWT_SECRET require Sign-in
        },
      })
      .then((res) => {
        updateUserImageProfile(res, () => {
          toast.success(
            "Gambar profil terupload. Jangan lupa simpan perubahan."
          );
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handlePhoto = (e) => {
    setNewUser({ ...newUser, photo: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    const token = getCookie("token");
    const { link_profil } = isAuth();

    console.log(isAuth());
    console.log(token);
    e.preventDefault();
    if (name !== "") {
      if (password1 === password2) {
        setFormData({ ...formData, textChange: "Submitting" });
        setLoading(true);
        axios
          .put(
            `${process.env.REACT_APP_API_URL}/user/update/${isAuth()._id}`,
            {
              name,
              email,
              institusi,

              password: password1,
              link_profil,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then((res) => {
            updateUser(res, () => {
              loadProfile();
              toast.success("Profil akun berhasil diupdate");

              setTimeout(() => {
                setLoading(false);
                window.location.reload();
              }, 1000);

              setFormData({ ...formData, textChange: "Update" });
            });
          })
          .catch((err) => {
            setFormData({
              ...formData,

              institusi: "",
              password1: "",
              password2: "",
            });
            toast.error(err.response.data.error);
            console.log(err.response);
          });
      } else {
        toast.error("Kedua Password tidak sesuai");
      }
    } else {
      toast.error("Nama tidak boleh kosong");
    }
  };

  const [Submited, setSubmited] = useState(false);
  return (
    <div className="font-Roboto">
      <Navbar />
      <div className="bg-[#F3F3F3] h-screen font-Roboto md:pt-28 md:px-16 md:pb-10">
        <div className="bg-white md:grid md:grid-cols-2 text-[#333333] w-full h-full p-5 rounded-lg">
          <div className="items-center flex flex-col">
            <img
              src={link_profil}
              alt="UserCircle"
              className="w-40 h-40 mt-20 md:w-80 md:h-80 md:mt-24 bg-[#319C69] rounded-full shadow"
            />
            <form 
            onSubmit={handleSubmits}
            className="items-center flex flex-col">
              <input
                className="mt-5 mb-3 md:mt-8 border-2"
                type="file"
                accept=".png, .jpg, .jpeg"
                name="photo5"
                onChange={handlePhoto}
              />
              <button
                type="submit"
                className="px-4 py-0.5 md:mt-2 rounded-md border-2 border-[#319C69] bg-white hover:bg-gray-200">
                Confirm New Photo
              </button>
            </form>
          </div>
          <form
            className="bg-white m-5 md:m-10 justify-center items-center"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2">
                Name
              </label>
              <input
                className="shadow border font-normal rounded-lg w-full py-3.5 px-3 text-gray-700 leading-tight focus:outline-none"
                id="name"
                type="text"
                onChange={handleChange("name")}
                value={name}
              />
            </div>
            <div className="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                className="shadow border font-normal rounded-lg w-full py-3.5 px-3 text-gray-700 leading-tight focus:outline-none"
                id="email"
                type="text"
                disabled
                value={email}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                className="shadow border font-normal rounded-lg w-full py-3.5 px-3 text-gray-700 leading-tight focus:outline-none"
                id="password1"
                type="password"
                onChange={handleChange("password1")}
                placeholder="Enter your password"
              />
            </div>
            <div className="mb-10">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Confirm Password
              </label>
              <input
                className="shadow border font-normal rounded-lg w-full py-3.5 px-3 text-gray-700 leading-tight focus:outline-none"
                id="password2"
                type="password"
                placeholder="Confirm your password"
                onChange={handleChange("password2")}
              />
            </div>
            <div className="justify-center md:justify-end flex">
              <button
                type="submit"
                className="items-center px-4 py-2 md:mt-16 rounded-md text-white bg-[#319C69] hover:bg-green-800"
              >
                Update Profile{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
