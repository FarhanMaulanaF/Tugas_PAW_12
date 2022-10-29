import React from "react";
import UserCircle from "../../assets/UserCircle.svg";
import PlusCircle from "../../assets/PlusCircle.svg"

const dashboard = () => {
  return (
    <div className="font-Roboto">
      <nav className="bg-[#319C69] fixed w-screen inset-x-0 top-0 py-10 font-Roboto">
        <div class="flex flex-wrap justify-between items-center ml-16 mr-16">
          <div className="text-3xl text-white font-bold flex items-center">
            Nama App
          </div>
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

      <div className="h-screen flex font-Roboto pt-44 px-16 pb-10 text-xl">
        <div className="text-black font-black w-2/3 pr-5">
            <div className="bg-[#D9D9D9] h-[25%] rounded-lg flex justify-start space-x-72">
              <div className="mt-5 ml-10 items-center h-4/5">Your Money
                <button className=" bg-[#FFFFFF] text-[#686868] flex font-normal text-base">
                  <img src={PlusCircle} alt="PlusCircle" />
                  <div>Add your starting balance</div>
                </button>
              </div>
              <div className="mt-5">Total Expanse
                <div className="grid h-4/5 place-items-center font-extralight text-base">Total of your expense.</div>
              </div>
              <div className="mt-5">Total Income
                <div className="grid h-4/5 place-items-center font-extralight text-base">Total of your income. </div>
              </div>
            </div>
            <div className="mt-5 bg-[#D9D9D9] h-[72%] rounded-lg">
              <div className="ml-10">
                Transactions
              </div>
              <div className="grid h-4/5 place-content-center font-extralight text-base">
                You have no transactions.
              </div>
            </div>
        </div>
        <div className=" text-black font-black bg-[#D9D9D9] w-1/3 rounded-lg">
          <div className="pl-10">
            Statistics
          </div>
          <div className="grid h-4/5 place-items-center font-extralight text-base">
            No statictics to display.
          </div>
        </div>
      </div>
    </div>
  );
};

export default dashboard;
