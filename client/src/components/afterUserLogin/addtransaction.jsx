import React from "react";

export default function AddTransaction({ visible, onClose }) {
    const handleOnClose = (e) => {
        if (e.target.id === "container") onClose();
    }
    if(!visible) return null;
    var category = ['Expense', 'Income'];
    return (
        <div id='container' onClick={handleOnClose} className="font-Roboto fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
            <div className="bg-white p-5 rounded-lg w-1/5 h-3/5"> 
            <div className="font-bold text-xl">Add Transaction</div>
            <div className="flex flex-col mt-2">
                <DropdownInput/>
            </div>
            <div className="flex flex-col mt-2">
                <input
                className="py-1 px-2 border border-black rounded-lg w-full text-gray-700"
                id="amount"
                type="text"
                placeholder="Amount">
                </input>
            </div>
            <button onClick={onClose}>X</button>
            </div>
        </div>
    )
}