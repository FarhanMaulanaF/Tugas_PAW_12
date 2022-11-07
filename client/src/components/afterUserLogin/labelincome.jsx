import React from "react";

const LabelIncome = () => {
    const labelIncome = [
        {label: "Salary", value: "salary"},
        {label: "Gift", value: "gift"},
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
                    {labelIncome.map((option) => (
                        <option value={option.value}>{option.label}</option>
                    ))}
                </select>
    )
}
export default LabelIncome;