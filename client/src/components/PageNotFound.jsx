import React from "react";
import { Link } from "react-router-dom";
import Notfound from "../assets/Notfound.svg";
import { authenticate, isAuth } from "../helpers/auth";
import Dropdown from "./home/Dropdown";

const PageNotFound = () => {
  return (
    <div className="bg-[#319C69] h-screen w-fill font-Roboto">
      {/* navbar  */}
      <div className="text-white flex justify-between items-center">
        <div className="font-black text-4xl ml-10 md:ml-32 my-10">
          <a href="/">Pristin</a>
        </div>
        <div className="md:mr-32  md:my-10">
          <ul className="md:flex font-semibold hidden text-lg space-x-14">
            {!isAuth() ? (
              <>
                {" "}
                <li>
                  <Link to="/login" className="hover:text-[#263238]">
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/register" className="hover:text-[#263238]">
                    Register
                  </Link>
                </li>
              </>
            ) : (
              <>
                {" "}
                <li>
                  <Link to="/dashboard" className="hover:text-[#263238]">
                    Dashboard
                  </Link>
                </li>
              </>
            )}
          </ul>
          <Dropdown />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center content-center">
        <div className="mr-5 ml-10 scale-75 md:scale-100">
          <img src={Notfound} alt="illustration" />
        </div>
        <div className="mt-10">
          <div className="text-white md:text-8xl text-center font-black mr-2 md:mt-5 text-5xl">
            Ooops!
          </div>
          <div className="text-center text-white md:text-4xl font-black mr-2 my-5 text-2xl">
            ERROR. Page Not Found.
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default PageNotFound;
