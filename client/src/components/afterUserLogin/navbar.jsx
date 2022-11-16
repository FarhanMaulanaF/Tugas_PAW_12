import React from "react";
import UserCircle from "../../assets/UserCircle.svg";
import {
  updateUser,
  isAuth,
  getCookie,
  signout,
  updateUserImageProfile,
} from "../../helpers/auth.js";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const Navigate = useNavigate();

  return (
    <nav className="bg-[#319C69] fixed w-screen inset-x-0 top-0 py-5 font-Roboto">
      <div class="flex flex-wrap justify-between items-center ml-16 mr-16">
        <Link to="/dashboard">
          <div className="text-3xl text-white font-bold flex cursor-pointer items-center">
            Pristin
          </div>
        </Link>

        <div className="flex item-center">
          <button
            type="text"
            onClick={() => {
              signout(() => {
                Navigate("/");
              });
            }}
            className="border-white border-2 rounded-md px-2 text-white hover:bg-green-800"
          >
            SIGN OUT{" "}
          </button>
          <div className="text-base ml-5 text-white mt-auto mb-auto mr-2 ">
            Hai, nama pengguna!
          </div>
          <div className="static">
            <Link to="/profile">
              <img src={UserCircle} alt="UserCircle" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
