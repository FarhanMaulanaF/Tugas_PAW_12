import React from "react";

function Features() {
  return (
    <div id="section-2" name='features' className="bg-white h-screen md:py-32 flex flex-col font-Roboto">
      <div className="flex flex-col h-fit md:h-screen mx-auto">
        <div className='text-black font-black text-4xl text-center mt-20 md:mt-0 content-center'>Features</div>
        <div className='md:flex flex-row items-center text-center gap-6 md:gap-5 h-4/5 mt-10 md:mt-20 font-medium'>
          <div className='h-full my-2  mx-auto w-11/12 bg-[#D9D9D9] flex items-center'><p className="mx-auto w-3/5">Record your daily income and expenses</p></div>
          <div className='h-full my-2 mx-auto w-11/12 bg-[#D9D9D9] flex items-center'><p className="mx-auto w-3/5">Keep track of where all your money is spent</p></div>
          <div className='h-full my-2 mx-auto w-11/12 bg-[#D9D9D9] flex items-center'><p className="mx-auto w-3/5">Visualize your inclome and expenses based on your own categories</p></div>
          <div className='h-full my-2 mx-auto w-11/12 bg-[#D9D9D9] flex items-center'><p className="mx-auto w-3/5">Manage your budgeting for future expense</p></div>
        </div>
      </div>
    </div>
  );
}

export default Features;