import React from "react";
import UserCircle from "../../assets/UserCircle.svg";
import PlusCircle from "../../assets/PlusCircle.svg";
import Faders from "../../assets/Faders.svg";
import AddTransaction from "../afterUserLogin/addtransaction.jsx";

const Transaction = () => {
  const [showAddTransaction, setShowAddTransaction] = React.useState(false);
  const handleOnClose = () => setShowAddTransaction(false);
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
          <div className="flex flex-wrap justify-between ml-5 mt-5">
            <div className="ml-10">
              Transactions
            </div>
            <div className="flex justify-between">
              <button onClick={() => setShowAddTransaction(true)} 
              className="items-center bg-[#FFFFFF] text-[#686868] flex font-normal text-base rounded-lg px-2 py-1">
                  <img src={PlusCircle} alt="PlusCircle"/>
                  <div className="ml-2">Add Transaction</div>
              </button>
              <button className="items-center bg-[#FFFFFF] text-[#686868] flex font-normal text-base rounded-lg ml-5 px-2 py-1">
                  <img src={Faders} alt="Faders"/>
                  <div className="ml-2">Filter</div>
              </button>
            </div>
          </div>
          <div className="grid h-4/5 place-content-center font-normal text-base">
            You have no transactions.
          </div>
        </div>
      </div>
      <AddTransaction onClose={handleOnClose} visible={showAddTransaction} />
    </div>
  )
}

export default Transaction;