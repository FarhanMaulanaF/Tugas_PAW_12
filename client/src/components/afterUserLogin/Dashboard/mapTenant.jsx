import React, { useEffect, useState } from "react";
import ItemTenant from "./ItemTenant";

const Tenant = ({ tenantList, categoryName }) => {
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

  const test1 = compareDates("06/21/2022", "07/28/2021");
  const test2 = compareDates("01/01/2001", "01/01/2001");
  const test3 = compareDates("11/01/2021", "02/01/2022");
  console.log(test1);
  const [searchValue, setSearchValue] = useState("");

  let listItem;
  if (tenantList) {
    listItem = tenantList.filter((item) => {
      const regex = new RegExp(searchValue, "gi");
      return regex.test(item.deskripsi);
    });
  }

  function searchHandler(event) {
    setSearchValue(event.target.value);
  }

  return (
    <div className="flex flex-col w-full items-center pt-1 pb-5">
      {listItem && (
        <>
          <p className="text-fgmBlack mt-2 mb-2">
            terdapat {listItem.length} transaksi
          </p>
          <div className="flex flex-col w-full p-5 ">
            {listItem.map((item) => {
              if (compareDates("2022-10-03", item.date) === false) {
                console.log(compareDates("2022-10-03", item.date));
                return <ItemTenant key={item.id_tenant} itemData={item} />;
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
