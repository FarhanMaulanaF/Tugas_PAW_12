import React from "react";
import MeetOurTeam from "../../assets/MeetOurTeam.svg";

function AboutUs() {
  return (
    <div
      id="section-3"
      name="aboutus"
      className="bg-white pt-48 font-Roboto h-screen w-screen flex "
    >
      <div className="flex mt-16 sm:mt-0 md:flex-row flex-col gap-5 w-[95%] h-1/2">
        <div className="w-full md:w-1/2 mx-auto md:pl-16">
          <div className="text-black text-center font-black text-4xl content-center md:text-left">
            About Us
          </div>
          <div className="text-black text-justify text-xl font-light my-5 w-2/3 mx-auto md:mx-0 md:w-full md:text-left">
            Pristin is a website application used to track, note, and manage
            daily transactions (i.e., income and expense). It is a project made
            by our team as an outcome of Website Application Development class
            in a semester. The Pristin development used MERN stack technology as
            it is fast and easy with only JavaScript language for a full-stack
            development.
          </div>
          <div className="flex justify-center md:justify-start">
            <button class="bg-[#319C69] font-medium py-3 px-7 rounded-lg text-xl text-white mt-5 md:mt-10 hover:bg-[#263238]">
              Get Started
            </button>
          </div>
        </div>

        <div className="md:w-1/2 mt-12 md:mt-0 w-full  flex justify-end items-center">
          <div className="w-2/3 md:pl-56">
            <div className="text-black text-center font-black text-4xl justify-center">
              Meet our Team
            </div>
            <img src={MeetOurTeam} alt="meet our team" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
