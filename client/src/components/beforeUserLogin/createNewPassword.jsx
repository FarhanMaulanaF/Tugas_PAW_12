import React from "react";
import GambarOrang from "../../assets/Gambar Orang.svg";

const CreateNewPassword = () => {
  return (
    <div className="h-screen bg-white grid grid-cols-2 font-Roboto">
      <div className="bg-[#319C69] justify-center items-center flex">
        <div className="w-2/3 h-2/3">
          <h1 className="text-3xl text-white text-center  font-bold">
            Nama App
          </h1>
          <img src={GambarOrang} alt="Gambar Login" className="mt-12" />
        </div>
      </div>
      <div className="bg-white justify-center items-center flex mt-auto mb-auto">
        <div className="w-2/3 h-2/3">
          <h1 className="text-3xl text-black text-center font-bold mb-10">
            Create your new password
          </h1>
          <div>
            <form>
              <div className="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
                <input
                  className="shadow border rounded-lg w-full py-3.5 px-3 text-gray-700 leading-tight focus:outline-none"
                  id="password"
                  type="password"
                  placeholder="Enter your new password (min. 8 characters)"
                />
              </div>
              <div className="mb-5">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Confirm Password
                </label>
                <input
                  className="shadow border rounded-lg w-full py-3.5 px-3 text-gray-700 mb-3 leading-tight focus:outline-none"
                  id="password"
                  type="password"
                  placeholder="Confirm your new password"
                />
              </div>
              <div>
                <button className="border rounded-lg text-white bg-[#333333] hover:bg-black w-full py-3.5">
                  Reset your password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNewPassword;
