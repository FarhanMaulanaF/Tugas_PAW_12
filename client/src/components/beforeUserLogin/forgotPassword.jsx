import React, { useState } from "react";
import GambarOrang from "../../assets/Gambar Orang.svg";

const ForgotPassword = () => {
  const [Submited] = useState(false);
  return (
    <div className="h-screen bg-white grid grid-cols-2 ">
      <div className="bg-[#319C69] justify-center items-center flex">
        <div className="w-2/3 h-2/3">
          <h1 className="text-3xl text-white text-center  font-bold">
            Nama App
          </h1>
          <img src={GambarOrang} alt="Gambar Login" className="mt-12" />
        </div>
      </div>
      <div className="bg-white justify-center items-center flex">
        {!Submited
          ? <div className="w-2/3 h-2/3 mt-64">
              <h1 className="text-3xl text-black text-center font-bold mb-10">
                Forgot your password?
              </h1>
              <div>
                <form>
                  <div className="mb-10">
                    <label class="block text-gray-700 text-sm font-bold mb-2">
                      Email
                    </label>
                    <input
                      className="shadow border rounded-lg w-full py-3.5 px-3 text-gray-700 leading-tight focus:outline-none"
                      id="email"
                      type="text"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <button className="border rounded-lg text-white bg-[#333333] hover:bg-black w-full py-3.5">
                      Sent confirmation email
                    </button>
                  </div>
                  <div />
                </form>
              </div>
            </div>
          : <div className="w-2/3 h-2/3 mt-96">
              <h1 className="text-4xl text-black text-center font-bold mb-10">
                Email has been sent!
              </h1>
              <p className="text-xl text-black text-center">
                Check your email to continue reset your password.
              </p>
            </div>}
      </div>
    </div>
  );
};

export default ForgotPassword;
