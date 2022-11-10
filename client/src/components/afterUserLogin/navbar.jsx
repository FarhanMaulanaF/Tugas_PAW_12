import React from "react";
import UserCircle from "../../assets/UserCircle.svg";
import { Link } from "react-router-dom";
const navbar = () => {
  return (
    <nav className="bg-[#319C69] fixed w-screen inset-x-0 top-0 py-5 font-Roboto">
      <div class="flex flex-wrap justify-between items-center ml-16 mr-16">
        <Link to="/dashboard">
          <div className="text-3xl text-white font-bold flex cursor-pointer items-center">
            Pristin
          </div>
        </Link>
        <div className="flex item-center">
          <div className="text-base text-white mt-auto mb-auto mr-2 ">
            Hai, nama pengguna
          </div>
          <div className="static">
            <img src={UserCircle} alt="UserCircle" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default navbar;
