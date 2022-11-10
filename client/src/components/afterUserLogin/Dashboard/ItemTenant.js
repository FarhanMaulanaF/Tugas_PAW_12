import { useState } from "react";

export default function ItemTenant(props) {
  const [src, setSrc] = useState(
    `/data/tenant/${props.itemData.id_tenant}/${props.itemData.tenantLogo}`
  );
  console.log(src);
  console.log(props.pemasukan);
  return (
    <a
      className="flex w-full m-1 flex-col items-start justify-between border sm:border-2 shadow  bg-white  duration-300 ease-out overflow-hidden"
      href={`/${props.itemData.id_tenant}`}
    >
      <div className="grid font-bold w-full grid-cols-4 justify-between sm:text-base text-sm m-2">
        <div>pemasukan :+{props.itemData.pemasukan}</div>
        <div>pengeluaran :-{props.itemData.pengeluaran}</div>
        <div>date :{props.itemData.date}</div>
        <div>deskripsi :{props.itemData.deskripsi}</div>
      </div>
    </a>
  );
}
