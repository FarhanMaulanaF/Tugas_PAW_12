import React from 'react'
import UserCircle from "../../assets/UserCircle.svg"

const dashboard = () => {
  return (
    <>
        <nav className='bg-[#319C69] fixed w-screen inset-x-0 top-0 py-10'>
            <div class="container flex flex-wrap justify-between items-center mx-auto">
                <div className='text-3xl text-white font-bold flex items-center'>
                    Nama App
                </div>
                <div className='flex my-auto item-center'>
                    <div className='mr-2'>
                        Hai, nama pengguna
                    </div>
                    <div className='flex'>
                        <img src={UserCircle} alt="UserCircle" />
                    </div>
                </div>
            </div>
        </nav>
        <div className='w-screen'>
            <div className='container'>

            </div>
        </div>
    </>
  )
}

export default dashboard