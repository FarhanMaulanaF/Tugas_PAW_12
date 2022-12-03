import React, { useEffect, useState } from "react";
import ItemTenant from "./ItemTenant";
import FadersWhite from "../../../assets/FadersWhite.svg";

const Tenant = ({ tenantList, categoryName }) => {
  console.log(tenantList);

  const [searchValue, setSearchValue] = useState("");
  const [labelValue, setLabelValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("");
  const [categoryDate, setCategoryDate] = useState("1");

  const compareDates = (d1, d2) => {
    let date1 = new Date(d1).getTime();
    let date2 = new Date(d2).getTime();

    if (date1 < date2) {
      return false;
    } else if (date1 > date2) {
      return true;
    } else {
      return true;
    }
  };

  const getDataDateFilter = (DateBefore) => {
    var today = new Date();
    var nextweek = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - parseInt(DateBefore)
    );
    return nextweek;
  };

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
  const handleCategoryDate = (e) => {
    setCategoryDate(e.target.value);
    console.log(categoryDate);
  };
  function searchHandler(event) {
    setSearchValue(event.target.value);
  }

  console.log(tenantList);

  return (
    <>
      <div className="flex justify-between ml-5 mt">
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
            {categoryValue === "expense" ? (
              <>
                <option value="food and drink"> Food and Drink </option>
                <option value="shopping"> Shopping </option>
                <option value="transport"> Transport </option>
                <option value="entertaiment"> Entertaiment </option>
                <option value="family"> Family </option>
                <option value="others"> Others </option>
              </>
            ) : (
              <>
                <option value="salary"> Salary </option>
                <option value="gift"> Gift </option>
                <option value="other"> Other </option>
              </>
            )}
          </select>
          <select
            onChange={handleCategoryDate}
            name="By Date Range"
            className="items-center bg-[#FFFFFF] text-[#000000] font-normal text-base rounded-lg ml-2 px-2 py-1 w-1/5 focus:outline-none"
          >
            <option value="7"> This Week </option>
            <option value="14"> Last Week </option>
            <option value="31"> This Month </option>
            <option value="62"> Last Month </option>
          </select>

          <input
            className="text-[#000000] font-normal text-base rounded-lg ml-2 px-2 py-1 focus:outline-none w-2/5"
            placeholder="By Description"
            value={searchValue}
            onChange={searchHandler}
          />
        </div>
      </div>
      <div className="flex h-full overflow-scroll-y flex-col w-full items-center pt-5 pb-20">
        {listItem.map((item) => {
          if (
            compareDates(getDataDateFilter(categoryDate), item.date) === false
          ) {
            return <ItemTenant key={item.id_tenant} itemData={item} />;
          } else {
            return <></>;
          }
        })}
      </div>
    </>
  );
};

export default Tenant;
