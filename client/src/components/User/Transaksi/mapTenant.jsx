import React,{useEffect,useState} from 'react'
import ItemTenant from './ItemTenant'


const Tenant = ({tenantList,categoryName}) => {
  console.log(tenantList)

  const [searchValue, setSearchValue] = useState("");
  console.log(tenantList)
  let listItem;
  if (tenantList) {
    listItem = tenantList.filter((item) => {
      const regex = new RegExp(searchValue, "gi");
      return regex.test(item.deskripsi);
    });
  }

  function searchHandler(event) {
    setSearchValue(event.target.value);
  }console.log(tenantList)

  return (
    <div className="flex flex-col w-full items-center pt-5 pb-20">
      <div className=' relative my-1 mx-auto  flex justify-center items-center w-full text-left text-white '>
                <div className='h-1 z-10 hidden sm:block bg-white w-1/3 ml-24 '></div>

                  <div className='h-1  hidden sm:block bg-white relative w-1/3  mr-24'></div>


            </div>
      <h2 className="my-8 text-4xl font-bold text-center text-white">
        {categoryName}
      </h2>
      <form className="2xl:w-1/4 xl:w-1/3 lg:w-1/2 w-4/5 h-12">
        <input
          id="search-tenant"
          className="bg-fgmGray  focus:outline-none focus:ring-2 focus:ring-fgmRed w-full h-full px-8 text-fgmBlack"
          placeholder="Daftar Transaksi"
          value={searchValue}
          onChange={searchHandler}
        ></input>
      </form>
      {listItem && (
        <>
          <p className="text-fgmBlack mt-5 mb-20">
           terdapat  {listItem.length}  transaksi
          </p>
          <div className="flex flex-col ">
            {listItem.map((item) => (
              <ItemTenant key={item.id_tenant} itemData={item} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Tenant