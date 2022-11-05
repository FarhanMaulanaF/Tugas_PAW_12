import React from "react";
import UserCircle from "../../assets/UserCircle.svg";
import PlusCircle from "../../assets/PlusCircle.svg";
import FadersWhite from "../../assets/FadersWhite.svg";

const transactionfilter = () => {
  return (
    <div className="font-Roboto">
      <nav className="bg-[#319C69] fixed w-screen inset-x-0 top-0 py-10 font-Roboto">
        <div class="flex flex-wrap justify-between items-center ml-16 mr-16">
          <div className="text-3xl text-white font-bold flex items-center">
            Pristin
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
        <div className="bg-[#D9D9D9] text-black font-black w-full pr-5 rounded-lg">
          <div className="flex justify-between ml-5 mt-5">
            <div className="ml-2">
              Transactions
            </div>
            <div className="flex justify-between">
              <button className="items-center bg-[#FFFFFF] text-[#686868] flex font-normal text-base rounded-lg px-2 py-1">
                  <img src={PlusCircle} alt="PlusCircle"/>
                  <div className="ml-2">Add Transaction</div>
              </button>
              <button className="items-center bg-[#319C69] text-[#FFFFFF] flex font-normal text-base rounded-lg ml-5 px-2 py-1">
                  <img src={FadersWhite} alt="FadersWhite"/>
                  <div className="ml-2">Filter</div>
              </button>
            </div>
          </div>
          <div className="flex justify-between ml-5 mt">
            <div className="ml-2 mt-2 flex justify-between bg-[#319C69] p-1.5 rounded-lg w-full">
              <label className="items-center text-[#FFFFFF] flex font-normal text-base rounded-lg px-2 py-1">
                  <img src={FadersWhite} alt="FadersWhite"/>
                  <div className="ml-2 mr-10">Filter</div>
              </label>
              <select 
                name="By Category"
                className="items-center bg-[#FFFFFF] text-[#000000] font-normal text-base rounded-lg ml-2 px-2 py-1 w-1/5 focus:outline-none">
                <option value="expense"> Expense </option>
                <option value="income"> Income </option>
              </select>
              <select 
                name="By Labels"
                className="items-center bg-[#FFFFFF] text-[#000000] font-normal text-base rounded-lg ml-2 px-2 py-1 w-1/5 focus:outline-none">
                <option value="food and drink"> Food and Drink </option>
                <option value="shopping"> Shopping </option>
                <option value="transport"> Transport </option>
                <option value="entertaiment"> Entertaiment </option>
                <option value="family"> Family </option>
                <option value="others"> Others </option>
              </select>
              <select 
                name="By Date Range"
                className="items-center bg-[#FFFFFF] text-[#000000] font-normal text-base rounded-lg ml-2 px-2 py-1 w-1/5 focus:outline-none">
                <option value="this week"> This Week </option>
                <option value="last week"> Last Week </option>
                <option value="this month"> This Month </option>
                <option value="last month"> Last Month </option>
              </select>
              <input
                className="text-[#000000] font-normal text-base rounded-lg ml-2 px-2 py-1 focus:outline-none w-2/5"
                placeholder="By Description"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default transactionfilter;