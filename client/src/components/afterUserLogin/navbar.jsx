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

import Dropdown from './Dropdown'

const Navbar = () => {
  const Navigate = useNavigate();

  return (
    <nav className="bg-[#319C69] fixed w-screen inset-x-0 top-0 py-3 md:py-5 font-Roboto">
      <div class="flex flex-wrap justify-between items-center mx-6 md:mx-16">
        <Link to="/dashboard">
          <div className="text-3xl text-white font-bold flex cursor-pointer items-center">
            Pristin
          </div>
        </Link>
        <div className="flex item-center">
          <div className="text-base ml-5 text-white mt-auto mb-auto mr-2">
           
          </div>
          <div className="static">
            <Dropdown />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
