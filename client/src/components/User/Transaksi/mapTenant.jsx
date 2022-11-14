import React, { useEffect, useState } from "react";
import ItemTenant from "./ItemTenant";
import FadersWhite from "../../../assets/FadersWhite.svg";

const Tenant = ({ tenantList, categoryName }) => {
  console.log(tenantList);

  const [searchValue, setSearchValue] = useState("");
  const [labelValue, setLabelValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("");

  console.log(tenantList);
  let listItem;

  if (tenantList) {
    listItem = tenantList.filter((item) => {
      const regex = new RegExp(searchValue, "gi");
      return regex.test(item.deskripsi);
    });
    if (labelValue !== "") {
      console.log(labelValue);
      console.log(listItem);
      listItem = listItem.filter((item) => item.kategori == labelValue);

      console.log(listItem);
    }
    if (categoryValue !== "") {
      console.log(categoryValue);
      console.log(listItem);
      listItem = listItem.filter((item) => item.label == categoryValue);

      console.log(listItem);
    }
  }
  const handleChangeLabel = (e) => {
    setLabelValue(e.target.value);
    console.log(labelValue);
  };
  const handleChangeCategory = (e) => {
    setCategoryValue(e.target.value);
    console.log(categoryValue);
  };
  function searchHandler(event) {
    setSearchValue(event.target.value);
  }

  console.log(tenantList);

  return (
    <>
      <div className="flex justify-between   ml-5 mt">
        <div className="ml-2 mt-2 flex justify-between bg-[#319C69] p-1.5 rounded-lg w-full">
          <label className="items-center text-[#FFFFFF] flex font-normal text-base rounded-lg px-2 py-1">
            <img src={FadersWhite} alt="FadersWhite" />
            <div className="ml-2 mr-10">Filter</div>
          </label>
          <select
            name="By Category"
            onChange={handleChangeCategory}
            className="items-center bg-[#FFFFFF] text-[#000000] font-normal text-base rounded-lg ml-2 px-2 py-1 w-1/5 focus:outline-none"
          >
            <option value="" disabled selected hidden>
              Category
            </option>
            <option value="expense"> Expense </option>
            <option value="income"> Income </option>
          </select>
          <select
            name="By Labels"
            onChange={handleChangeLabel}
            className="items-center bg-[#FFFFFF] text-[#000000] font-normal text-base rounded-lg ml-2 px-2 py-1 w-1/5 focus:outline-none"
          >
            <option value="" disabled selected hidden>
              Label
            </option>
            <option value="food and drink"> Food and Drink </option>
            <option value="shopping"> Shopping </option>
            <option value="transport"> Transport </option>
            <option value="entertaiment"> Entertaiment </option>
            <option value="family"> Family </option>
            <option value="others"> Others </option>
          </select>
          <select
            name="By Date Range"
            className="items-center bg-[#FFFFFF] text-[#000000] font-normal text-base rounded-lg ml-2 px-2 py-1 w-1/5 focus:outline-none"
          >
            <option value="this week"> This Week </option>
            <option value="last week"> Last Week </option>
            <option value="this month"> This Month </option>
            <option value="last month"> Last Month </option>
          </select>

          <input
            className="text-[#000000] font-normal text-base rounded-lg ml-2 px-2 py-1 focus:outline-none w-2/5"
            placeholder="By Description"
            value={searchValue}
            onChange={searchHandler}
          />
        </div>
      </div>
      <div className="flex h-full overflow-scroll flex-col w-full items-center pt-5 pb-20">
        {listItem && (
          <>
            <div className="flex flex-col w-full p-5 ">
              {listItem.map((item) => (
                <ItemTenant key={item.id_tenant} itemData={item} />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Tenant;
