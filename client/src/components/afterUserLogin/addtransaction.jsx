import React from "react";
import DropDownList from "./categorylabel.jsx";

const AddTransaction = ({ visible, onClose }) => {
  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };

  const category = [
    { label: "Expense", value: "expense" },
    { label: "Income", value: "income" },
  ];
  const [categoryState, setCategoryState] = React.useState("");

  if (!visible) return null;
  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="font-Roboto fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center"
    >
      <div className="bg-white p-5 rounded-lg w-[24rem] h-3/5 flex flex-col">
        <div className="font-bold text-xl">Add Transaction</div>
        <div className="flex flex-col mt-3 items-center">
          <div className="w-5/6">
            <DropDownList></DropDownList>
          </div>
          <input
            className="py-0.5 px-2 mt-4 w-5/6 border border-black rounded-lg text-gray-700"
            id="amount"
            type="number"
            placeholder="Amount"
          ></input>
          <input
            className="py-0.5 px-2 mt-4 w-5/6 border border-black rounded-lg text-gray-700"
            id="description"
            type="text"
            placeholder="Add description"
          ></input>
          <button
            onClick={onClose}
            className="bg-[#319C69] hover:bg-green-800 text-white mt-4 w-1/3 py-1 rounded"
          >
            Done
          </button>
          <button
            onClick={onClose}
            className="bg-black hover:bg-green-800 text-white mt-4 w-1/3 py-1 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
export default AddTransaction;
