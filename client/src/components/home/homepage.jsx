import React from "react";
import Illustration from "../../assets/Illustration.png";
import { Link } from "react-router-dom";
function Homepage() {
  return (
    <div className="bg-[#319C69] h-screen font-Roboto">
      {/* navbar  */}
      <div className="text-white flex justify-between items-center">
        <div className="font-black text-4xl ml-32 my-10">
          <a href="/">Pristin</a>
        </div>
        <div className="mr-32 my-10">
          <ul className="flex font-semibold text-lg space-x-14">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="features">Features</Link>
            </li>
            <li>
              <Link to="about-us">About Us</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Register</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Pristin Content */}
      <div className="flex justify-between items-center pt-12">
        <div>
          <div className="text-white text-6xl font-black ml-32">Pristin</div>

          <div className="text-white text-xl ml-32 font-light my-5">
            Track, note, and manage your daily transactions <br /> all in a
            single page.
          </div>

          <button class="bg-[#F3F3F3] ml-32 font-medium py-3 px-7 rounded-lg my-16 text-xl">
            Get Started
          </button>
        </div>

        <div className="mr-32 my-32 scale-110">
          <img src={Illustration} alt="illustration" />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
