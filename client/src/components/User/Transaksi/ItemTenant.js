import { useState } from "react";


export default function ItemTenant(props) {
  const [src, setSrc] = useState(
    `/data/tenant/${props.itemData.id_tenant}/${props.itemData.tenantLogo}`
  );
  console.log(src)
  console.log(props.pemasukan)
  return (
    <a
      className="flex  m-2 flex-col items-start border sm:border-2 shadow  bg-white  hover:scale-110 duration-300 ease-out overflow-hidden"
      href={`/${props.itemData.id_tenant}`}
    >

      <div className="flex-none font-bold sm:text-base text-sm m-2">
        <div>
        pemasukan :
        {props.itemData.pemasukan}
        </div>
        <div>
        pengeluaran :
        {props.itemData.pengeluaran}
        </div>
        <div>
         deskripsi : 
         {props.itemData.deskripsi}
         </div>

      </div>
    </a>
  );
}