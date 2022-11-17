import React, { useEffect, useState } from "react";
import ItemTenant from "./ItemTenant";

const Tenant = ({ tenantList, categoryName, loadPosts }) => {
  const [DateBefore, setDateBefore] = useState(0);
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
      today.getDate() - DateBefore
    );
    return nextweek;
  };

  useEffect(() => {}, []);

  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="flex flex-col overflow-y-scroll h-full w-full mb-5 items-center pt-1 pb-5">
      {tenantList && (
        <>
          {tenantList.length === 0 && (
            <>
              <p className="font-normal text-base mt-28 mb-2 ${{tenantList.length} === 0 ? 'block' : 'hidden'}">
                No transaction to display.
              </p>
            </>
          )}
          <div className="flex flex-col w-full p-5 ">
            <div className="grid font-bold text-white  bg-black h-16 rounded-md px-2 items-center border-2 w-full grid-cols-6 justify-center sm:text-base text-sm m-2">
              <div className="mx-auto">Category</div>
              <div className="mx-auto">Label</div>
              <div className="mx-auto">Amount</div>
              <div className="mx-auto">Date</div>
              <div className="mx-auto">Description</div>
              <div className="mx-auto">Action</div>
            </div>

            {tenantList.map((item) => {
              if (compareDates("2022-10-03", item.date) === false) {
                console.log(getDataDateFilter(7));
                console.log(compareDates(getDataDateFilter(7), "2022-11-22"));
                return (
                  <>
                    <ItemTenant
                      key={item.id_tenant}
                      test={loadPosts}
                      itemData={item}
                    />
                  </>
                );
              } else {
                return <></>;
              }
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Tenant;
