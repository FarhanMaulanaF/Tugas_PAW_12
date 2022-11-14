import React from "react";

const inputForm = ({ type, placeholder, onchange, value }) => {
  return (
    <div>
      <span className="font-medium ">{placeholder}</span>

      <input
        className="text-black w-full px-4 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mb-5"
        type={type}
        placeholder={placeholder}
        onChange={onchange}
        value={value}
      />
    </div>
  );
};

export default inputForm;
