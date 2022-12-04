import React from "react";
import Notes from "../../assets/Notes.svg";
import Group from "../../assets/Group.svg";
import Savingmoney from "../../assets/Savingmoney.svg";
import Visualdata from "../../assets/Visualdata.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const features = () => {
  AOS.init();
  AOS.refresh();
  return (
    <div
      id="section-2"
      name="features"
      className="bg-white h-fit md:h-screen md:py-32 md:px-10 flex w-full flex-col font-Roboto"
    >
      <div
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="200"
        className="flex flex-col h-fit md:h-screen mx-auto"
      >
        <div className="text-black font-black text-2xl xm:text-4xl text-center mt-5 xm:mt-20 md:mt-0 content-center">
          Features
        </div>
        <div className="md:flex flex-row items-center text-center gap-6 md:gap-5 h-4/5 mt-1 xm:mt-10 md:mt-20 font-medium">
          <div className="h-1/3 md:h-full my-2 md:pt-16 2xl:pt-0  mx-auto w-11/12 flex 2xl:flex-row flex-col items-center bg-[#319C69] rounded-lg scale-75 xm:scale-100">
            <div className="flex flex-col  items-center justify-center m-10 md:ml-10">
              <img src={Notes} alt="Record Income and Expenses Illustration" />
            </div>
            <p className="mx-auto w-3/5 text-[#FFFFFF] md:mr-10">
              Record your daily income and expenses
            </p>
          </div>
          <div className="h-1/3 md:h-full my-2  md:pt-16 2xl:pt-0 mx-auto w-11/12 flex 2xl:flex-row flex-col items-center bg-[#319C69] rounded-lg scale-75 xm:scale-100">
            <div className="flex items-center justify-center m-10 md:ml-10">
              <img src={Group} alt="Money Expenses Organization Illustration" />
            </div>
            <p className="mx-auto w-3/5 text-[#FFFFFF] md:mr-10">
              Keep track of where all your money is spent
            </p>
          </div>
          <div className="h-1/3 md:h-full my-2  md:pt-16 2xl:pt-0 mx-auto w-11/12 flex 2xl:flex-row flex-col items-center bg-[#319C69]  rounded-lg scale-75 xm:scale-100">
            <div className="flex items-center justify-center mt-10 md:ml-10">
              <img src={Savingmoney} alt="Saving Money Illustration" />
            </div>
            <p className="mx-auto w-3/5 text-[#FFFFFF] mt-10 md:mx-10">
              Visualize your income and expenses based on your own categories
            </p>
          </div>
          <div className="h-1/3 md:h-full my-2 md:pt-16 2xl:pt-0 mx-auto w-11/12 flex 2xl:flex-row flex-col items-center bg-[#319C69] rounded-lg scale-75 xm:scale-100">
            <div className="flex items-center justify-center m-10 md:ml-10">
              <img src={Visualdata} alt="Saving Money Illustration" />
            </div>
            <p className="mx-auto w-3/5 text-[#FFFFFF] md:mr-10">
              Manage your budgeting for future expense
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default features;
