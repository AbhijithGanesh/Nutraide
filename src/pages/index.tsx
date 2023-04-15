import React from 'react';
import { AiFillGithub } from "react-icons/ai"
import { CiLogin } from "react-icons/ci"
import { TbApi } from "react-icons/tb"

const ComingSoonPage: React.FC = () => {
  const currentDate = new Date();
  return (
    <div className="bg-gray-900 min-h-screen flex justify-center items-center">
      <div className="max-w-lg mx-auto p-8 bg-gray-800 rounded-lg shadow-xl">
        <h1 className="text-4xl font-black mb-4 text-gray-100">NutriClient App</h1>
        <p className="text-gray-300 text-xl mb-8">
          We're working to make this App to come to life! Stay tuned!
        </p>
        <div className="flex flex-1 space-x-4">
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-gray-700">
            <AiFillGithub className="text-white text-4xl hover:translate-x-2"/>
          </div>
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-gray-700">
            <CiLogin className="text-white text-4xl" />
          </div>
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-gray-700">
            <TbApi className="text-white text-4xl" />
          </div>
        </div>
        <p className="text-gray-300 text-sm mt-8">&copy; {currentDate.getFullYear()} Team Scout Sentinels .</p>
      </div>
    </div>
  );
};

export default ComingSoonPage;
