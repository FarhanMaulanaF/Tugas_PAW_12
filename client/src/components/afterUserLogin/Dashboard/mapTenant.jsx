import React, { useEffect, useState } from "react";
import ItemTenant from "./ItemTenant";

const Tenant = ({ tenantList, categoryName, loadPosts }) => {
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
            {tenantList.map((item) => {
              if (compareDates("2022-10-03", item.date) === false) {
                console.log(compareDates("2022-10-03", item.date));
                return (
                  <ItemTenant
                    key={item.id_tenant}
                    test={loadPosts}
                    itemData={item}
                  />
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
