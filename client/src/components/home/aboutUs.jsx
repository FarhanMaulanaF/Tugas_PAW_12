import React from "react";
import Team from "../../assets/team.png";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div
      id="section-3"
      name="aboutus"
      className="bg-white pt-48 font-Roboto h-screen w-screen flex ">
      <div className="md:grid-cols-2 grid mt-16 sm:mt-0 md:flex-row flex-col gap-5 w-screen h-1/2">
        <div className="justify-center md:ml-16">
          <div className="text-black text-center font-black text-4xl content-center md:text-left">
            About Us
          </div>
          <div className="text-black text-justify text-xl font-light my-5 w-2/3 mx-auto md:mx-0 md:w-4/6 md:text-left">
            Pristin is a website application used to track, note, and manage
            daily transactions (i.e., income and expense). It is a project made
            by our team as an outcome of Website Application Development class
            in a semester. The Pristin development used MERN stack technology as
            it is fast and easy with only JavaScript language for a full-stack
            development.
          </div>
          <div className="flex justify-center md:justify-start">
            <Link to="/register">
              <button class="bg-[#319C69] text-white md:text-left font-medium py-3 px-7 rounded-lg my-16 text-xl hover:bg-[#263238] hover:text-white">
              Get Started
              </button>
            </Link>
          </div>
        </div>

        <div className="">
          <div className="flex flex-col pt-10 md:pt-0 justify-center">
            <div className="flex justify-center text-black text-center font-black text-4xl">
              Meet our Team
            </div>
            <div className="flex justify-center">
              <img src={Team} className="scale-75" alt="our team" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
