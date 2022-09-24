import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

// import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import {
  updateUser,
  isAuth,
  getCookie,
  signout,
  updateUserImageProfile,
} from "../../../helpers/auth.js";
import { useNavigate } from "react-router-dom";
// import FormFoto from "../../components/FormFoto";
// import LoadingSpinner from "../../components/LoadingSpiner";

const PrivateContent = ({ history }) => {
  const navigate = useNavigate();
  const tittle = "Loading";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password1: "",
    textChange: "Update",
    institusi: "",
    role: "",
    tabungan:"",
    pemasukan:"",
    pengeluaran:"",
    link_profil: "",
  });
  const [newUser, setNewUser] = useState({
    photo: "",
  });
  useEffect(() => {
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
        const { role, name, email, link_profil, institusi,pemasukan, pengeluaran, tabungan } = res.data;
        setFormData({ ...formData, role, name, email, institusi,pemasukan, pengeluaran, tabungan, link_profil });
      })
      .catch((err) => {
        // toast.error(`Error To Your Information ${err.response.statusText}`);
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
    textChange,
    pemasukan, pengeluaran, tabungan,
  } = formData;
  const handleChange = (text) => (e) => {
    setFormData({ ...formData, [text]: e.target.value });
  };

  // const handleSubmits = (e) => {
  //   toast.info(
  //     "Proses upload membutuhkan waktu. Tunggu hingga notifikasi terunggah muncul "
  //   );
  //   e.preventDefault();
  //   const image = newUser.photo;
  //   new Compressor(image, {
  //     convertTypes: "image/png",
  //     convertSize: 500000,
  //     success: (compressedResult) => {
  //       const formData = new FormData();
  //       formData.append("file", compressedResult, compressedResult.name);
  //       axios
  //         .post(`${process.env.REACT_APP_API_URL}/upload`, formData)
  //         .then((res) => {
  //           updateUserImageProfile(res, () => {
  //             toast.success(
  //               "Gambar profil terupload. Jangan lupa simpan perubahan."
  //             );
  //           });
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //         });
  //     },
  //   });
  // };

  const handlePhoto = (e) => {
    setNewUser({ ...newUser, photo: e.target.files[0] });
  };
  // const handleDeleteF1 = (e) => {
  //   let URL = "";
  //   const { link_profil } = isAuth();
  //   URL = link_profil;

  //   axios
  //     .post(`${process.env.REACT_APP_API_URL}/deleteImage`, {
  //       URL,
  //     })
  //     .then((res) => {
  //       let sementara = isAuth();
  //       console.log(sementara);
  //       console.log("TEST");
  //       //ingin disimpan di localdata
  //       updateUserImageProfile(res, () => {
  //         toast.success(
  //           "Gambar profil berhasil dihapus. Jangan lupa simpan perubahan."
  //         );
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  // const handleSubmit = (e) => {
  //   const token = getCookie("token");
  //   const { link_profil } = isAuth();

  //   console.log(isAuth());
  //   console.log(token);
  //   e.preventDefault();
  //   if (name !== "") {
  //     if (password1 === password2) {
  //       setFormData({ ...formData, textChange: "Submitting" });
  //       setLoading(true);
  //       axios
  //         .put(
  //           `${process.env.REACT_APP_API_URL}/user/update`,
  //           {
  //             name,
  //             email,
  //             institusi,

  //             password: password1,
  //             link_profil,
  //           },
  //           {
  //             headers: {
  //               Authorization: `Bearer ${token}`,
  //             },
  //           }
  //         )
  //         .then((res) => {
  //           updateUser(res, () => {
  //             loadProfile();
  //             toast.success("Profil akun berhasil diupdate");

  //             setTimeout(() => {
  //               setLoading(false);
  //               window.location.reload();
  //             }, 1000);

  //             setFormData({ ...formData, textChange: "Update" });
  //           });
  //         })
  //         .catch((err) => {
  //           setFormData({
  //             ...formData,

  //             institusi: "",
  //             password1: "",
  //             password2: "",
  //           });
  //           toast.error(err.response.data.error);
  //           console.log(err.response);
  //         });
  //     } else {
  //       toast.error("Kedua Password tidak sesuai");
  //     }
  //   } else {
    //     toast.erro	
  // };

  return (
    <div className="font-bold ">
      {" "}

      
      
        <div className="px-12 py-12 font-bold flex flex-col items-start xl:grid xl:grid-cols-2 w-full">
          <form
            className="w-full justify-start flex-1 text-black"
            // onSubmit={handleSubmit}
          >
            <div className="max-w-xs relative ">
              {/*<input
            disabled
            className='w-full px-6 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white'
            type='text'
            placeholder='Role'
            value={role}
          />*/}
              <p className="font-medium mb-2 text-nesco-orange">Email</p>
              <input
                className="w-full bg-transparent mb-3 text-nesco-bg-purple"
                type="email"
                placeholder="Email"
                disabled
                value={email}
              />
               <p className="font-medium mb-2 text-nesco-orange">Nama</p>
              <input
                className="w-full bg-transparent mb-3 text-nesco-bg-purple"
                type="text"
                placeholder="Name"
                disabled
                value={name}
              />
               <p className="font-medium mb-2 text-nesco-orange">Tabungan</p>
               <input
                className="w-full bg-transparent mb-3 text-nesco-bg-purple"
                type="text"
                placeholder="Tabungan"
                disabled
                value={tabungan}
              />
               <p className="font-medium mb-2 text-nesco-orange">Pemasukan</p>
              <input
                className="w-full bg-transparent mb-3 text-nesco-bg-purple"
                type="text"
                placeholder="Pemasukan"
                disabled
                value={pemasukan}
              />
               <p className="font-medium mb-2 text-nesco-orange">Pengeluaran</p>
                <input
                className="w-full bg-transparent mb-3 text-nesco-bg-purple"
                type="text"
                placeholder="Pengeluaran"
                disabled
                value={pengeluaran}
              />

            

              <button
                type="submit"
                className="hidden mb-3 tracking-wide font-semibold bg-nesco-bg-blue text-gray-100 w-full py-4  hover:bg-indigo-700 transition-all duration-300 ease-in-out xl:flex items-center justify-center focus:shadow-outline focus:outline-none"
              >
                <i className="fas fa-user-plus fa 1x w-6  -ml-2" />
                <span className="ml-3">{textChange}</span>
              </button>
              
            </div>
            <button
            type="text"
              onClick={() => {
                signout(() => {
                  navigate("/");
                });
              }}
              className=" hover:scale-110 transition-all my-8 py-2 px-6 shadow-lg  border-2 border-nesco-orange shadow-nesco-orange/25 hover:bg-white"
              
            >SIGN OUT </button>
            <Link to="/transaksi"> 
               <button
            type="text"
              onClick={() => {
              
                  navigate("/transaksi");
                
              }}
              className=" hover:scale-110 transition-all my-8 py-2 px-6 shadow-lg border-2 border-nesco-orange shadow-nesco-orange/25 hover:bg-white"
             
            >Transaksi </button>
            </Link>
          </form>
{/* 
          <FormFoto
            title="Foto Profil"
            onchange={handlePhoto}
            // onsubmit={handleSubmits}
          /> */}
          {/* <form
        className='w-full flex-1 mt-8 text-nesco-bg-blue'
        onSubmit={handleSubmits}
      >
                                

        <div className='mx-auto max-w-sm relative '>
          <span className="font-medium ">
            Upload Foto Profil
          </span>

          <input
            type="file"
            accept=".png, .jpg, .jpeg"
            name="photo"
            onChange={handlePhoto}
          />
          <div className=' xl:grid xl:grid-cols-2 xl:gap-3 w-full'>
            <button
              type='submit'
              className='w-full xl:w-auto my-5 tracking-wide font-semibold bg-nesco-bg-blue text-gray-100 py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none'
            >

              <p>Upload Gambar</p>
            </button>
            <button type='button' className='w-full xl:w-auto my-5 tracking-wide font-semibold bg-pink-500 text-gray-100 py-4 rounded-lg hover:bg-pink-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none'
              onClick={() => handleDeleteF1()}>
              <p>Delete</p>
            </button>
            <button
            onClick={handleSubmit}
            className='flex mt-12 tracking-wide font-semibold bg-nesco-bg-blue text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out xl:hidden items-center justify-center focus:shadow-outline focus:outline-none'
          >
            <i className='fas fa-user-plus fa 1x w-6  -ml-2' />
            <span className='ml-3'>{textChange}</span>
          </button>
          </div>

        </div>


      </form> */}
        </div>
    
    </div>
  );
};

export default PrivateContent;
