import React from "react";

const LabelExpense = () => {
    const labelExpense = [
        {label: "Food and Beverage", value: "fnb"},
        {label: "Shop", value: "shop"},
        {label: "Transportation", value: "transportation"},
        {label: "Entertainment", value: "expense"},
        {label: "Family and Personal", value: "familypersonal"},
        {label: "Health", value: "health"},
        {label: "Other", value: "other"}
    ];
    const [labelState, setLabelState] = React.useState("");
    return(
        <select
                className="py-1 px-2 border border-black rounded-lg"
                onChange={(e) => {
                    const selectedLabel = e.target.value;
                    setLabelState(selectedLabel);
                }}>
                    {labelExpense.map((option) => (
                        <option value={option.value}>{option.label}</option>
                    ))}
                </select>
    )
}
export default LabelExpense;