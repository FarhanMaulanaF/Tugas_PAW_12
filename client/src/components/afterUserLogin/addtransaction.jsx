import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import LabelExpense from "./labelexpense.jsx";
import LabelIncome from "./labelincome.jsx";

const AddTransaction = ({ visible, onClose }) => {
    const handleOnClose = (e) => {
        if (e.target.id === "container") onClose();
    };

    const category = [
        { label: "Expense", value: "expense" },
        { label: "Income", value: "income" }
    ];
    const [categoryState, setCategoryState] = React.useState("");

    const labelExpense = [
        { label: "Food and Beverage", value: "fnb" },
        { label: "Shop", value: "shop" },
        { label: "Transportation", value: "transportation" },
        { label: "Entertainment", value: "expense" },
        { label: "Family and Personal", value: "familypersonal" },
        { label: "Health", value: "health" },
        { label: "Other", value: "other" }
    ];

    const labelIncome = [
        { label: "Salary", value: "salary" },
        { label: "Gift", value: "gift" },
        { label: "Other", value: "other" }
    ]
    const [labelState, setLabelState] = React.useState("");

    const [labelExpVisible, setLabelExpVisible] = useState(true);
    const [labelIncVisible, setLabelIncVisible] = useState(false);

    React.useEffect(() => {
        setCategoryState === 'Expense' ? setLabelExpVisible(true) : setLabelExpVisible(false)
    })

    if (!visible) return null;
    return (
        <div id='container' onClick={handleOnClose} className="font-Roboto fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
            <div className="bg-white p-5 rounded-lg w-1/5 h-3/5">
                <div className="font-bold text-xl">Add Transaction</div>
                <div className="flex flex-col mt-2">
                    <select
                        className="py-1 px-2 border border-black rounded-lg"
                        onChange={(e) => {
                            const selectedCategory = e.target.value;
                            setCategoryState(selectedCategory);
                        }}>
                        {category.map((option) => (
                            <option value={option.value}>{option.label}</option>
                        ))}
                    </select>
                    {categoryState}
                </div>
                <div className="flex flex-col mt-2">
                    {labelExpVisible && <LabelExpense/>}
                    {labelIncVisible && <LabelIncome/>}
                </div>
                <div className="flex flex-col mt-2">
                    <input
                        className="py-1 px-2 border border-black rounded-lg w-full text-gray-700"
                        id="amount"
                        type="number"
                        placeholder="Amount">
                    </input>
                </div>
                <button onClick={onClose}>X</button>
            </div>
        </div>
    )
}
export default AddTransaction;