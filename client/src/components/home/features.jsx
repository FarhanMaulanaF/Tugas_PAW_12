import React from "react";

function Features() {
  return (
    <div name='features' className="bg-white h-screen py-32 flex flex-col font-Roboto">
      <div className="flex flex-col item-center h-full mx-auto">
      <div className=' text-black font-black text-4xl text-center  content-center'>Features</div>
        <div className='flex text-center gap-5 items-center h-4/5 mt-20 font-medium'>
            <div className='h-full w-1/2 bg-[#D9D9D9] flex items-center justify-center'><p>Record your daily income and expenses</p></div>
            <div className='h-full w-1/2 bg-[#D9D9D9] flex items-center justify-center'>Keep track of where all your money is spent</div>
            <div className='h-full w-1/2 bg-[#D9D9D9] flex items-center justify-center'>Visualize your inclome and expenses based on your own categories</div>
            <div className='h-full w-1/2 bg-[#D9D9D9] flex items-center justify-center'>Manage your budgeting for future expense</div>
        </div>
      </div>
    </div>
  );
}

export default Features;