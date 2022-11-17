import React, { useEffect, useState } from "react";
import ItemTenant from "./ItemTenant";
import FadersWhite from "../../../assets/FadersWhite.svg";

const Tenant = ({ tenantList, categoryName }) => {
  console.log(tenantList);

  const [searchValue, setSearchValue] = useState("");
  const [labelValue, setLabelValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("");
  const [categoryDate, setCategoryDate] = useState("0");


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
    var nextweek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - parseInt(DateBefore));
    return nextweek;
  }


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
      <div className="ml-5">
        <div className="mt-2 grid md:flex md:justify-between bg-[#319C69] p-2 rounded-lg w-full md:h-12">
          <label className="items-center text-white flex font-normal text-base rounded-lg px-2 py-1">
            <img src={FadersWhite} alt="FadersWhite" />
            <div className="ml-2 mr-10">Filter</div>
          </label>
          <select
            name="By Category"
            onChange={handleChangeCategory}
            className="items-center bg-white text-black flex font-normal text-base rounded-lg ml-2 mr-2 mb-2 md:mb-0 md:w-1/5 px-2 py-1 focus:outline-none"
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
            className="items-center bg-white text-black flex font-normal text-base rounded-lg ml-2 mr-2 mb-2 md:ml-0 md:mb-0 md:w-1/5 px-2 py-1 focus:outline-none"
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
            onChange={handleCategoryDate}
            name="By Date Range"
            className="items-center bg-white text-black flex font-normal text-base rounded-lg ml-2 mr-2 mb-2 md:ml-0 md:mb-0 md:w-1/5 px-2 py-1 focus:outline-none"
          >
            <option value="7"> This Week </option>
            <option value="14"> Last Week </option>
            <option value="31"> This Month </option>
            <option value="62"> Last Month </option>
          </select>

          <input
            className="items-center bg-white text-black flex font-normal text-base rounded-lg ml-2 mr-2 mb-2 md:ml-0 md:mb-0 md:w-2/5 px-2 py-1 focus:outline-none"
            placeholder="By Description"
            value={searchValue}
            onChange={searchHandler}
          />
        </div>
      </div>
      <div className="flex h-full overflow-scroll flex-col w-full items-center pt-5 pb-20 ml-5">
        {listItem.map((item) => {
          if (compareDates(getDataDateFilter(categoryDate), item.date) === false) {
            console.log(getDataDateFilter(7));
            console.log(compareDates(getDataDateFilter(7), "2022-11-22"));
            return (
              <ItemTenant
                key={item.id_tenant}

                itemData={item}
              />
            );
          } else {
            return <></>;
          }
        })}
      </div>
    </>
  );
};

export default Tenant;
