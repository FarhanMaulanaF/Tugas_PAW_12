import React from 'react'

function AboutUs() {
  return (
    <div className='bg-white pt-48 font-Roboto h-screen'>  
        <div className='ml-32 '>
            <div className='text-black font-black text-4xl content-center'>About Us</div>
            <div className="text-black text-xl font-light my-5 w-1/4">
            Pristin is a website application used to track, note, and manage daily transactions (i.e., income and expense). It is a project made by our team as an outcome of Website Application Development class in a semester. The Pristin development used MERN stack technology as it is fast and easy with only JavaScript language for a full-stack development.
            </div>
            <button class="bg-[#319C69] font-medium py-3 px-7 rounded-lg text-xl text-white mt-10">
            Get Started
          </button>
        </div>

    </div>
  )
}

export default AboutUs