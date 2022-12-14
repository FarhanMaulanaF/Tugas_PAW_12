import React from "react";
import Illustration from "../../assets/Illustration.png";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import { authenticate, isAuth } from "../../helpers/auth";

function Homepage() {
  return (
    <div className="bg-[#319C69] overflow-hidden h-fit w-full font-Roboto">
      {/* navbar  */}
      <div className="text-white flex justify-between items-center">
        <div className="font-black text-2xl xm:text-4xl ml-10 md:ml-32 my-10">
          <a href="/">Pristin</a>
        </div>
        <div className="md:mr-32  md:my-10">
          <ul className="md:flex font-semibold hidden text-lg space-x-14">
            <li>
              <a href="/" className=" hover:text-[#263238]">
                Home
              </a>
            </li>
            <li>
              <a
                href="#section-2"
                className="hover:text-[#263238]"
                to="features"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#section-3"
                className="hover:text-[#263238]"
                to="about-us"
              >
                About Us
              </a>
            </li>
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

      {/* Pristin Content */}
      <div
        id="section-1"
        className="flex flex-col md:flex-row h-fit  md:flex justify-between items-center pt-3"
      >
        <div className="order-last md:order-first">
          <div className="text-white text-3xl xm:text-6xl font-black text-center mt-10 md:ml-32 md:text-left">
            Pristin
          </div>

          <div className="text-white text-sm xm:text-xl text-center md:ml-32 md:text-left font-light my-5">
            Track, note, and manage your daily transactions <br /> all in a
            single page.
          </div>

          <div className="flex justify-center md:justify-start">
            <Link to="/register">
              <button class="bg-[#F3F3F3] justify-center md:text-left md:ml-32 font-medium py-3 px-7 rounded-lg my-8 xm:my-16 text-sm xm:text-xl hover:bg-[#263238] hover:text-white">
                Get Started
              </button>
            </Link>
          </div>
        </div>

        <div className="flex order-first md:order-last justify-center scale-75 md:scale-100 md:justify-start md:mr-32 md:my-32 ">
          <img src={Illustration} alt="illustration" />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
