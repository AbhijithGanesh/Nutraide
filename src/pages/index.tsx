import React from 'react';
import { AiFillGithub,AiOutlineHeart } from "react-icons/ai"
import { CiLogin, CiStethoscope } from "react-icons/ci"
import { TbApi } from "react-icons/tb"
import { GiHealthPotion } from "react-icons/gi"

const ComingSoonPage: React.FC = () => {
  const currentDate = new Date();
  return (
    <div className="bg-gray-900 min-h-screen flex justify-center items-center p-2">
      <div className="max-w-lg mx-auto p-4 bg-gray-800 rounded-lg shadow-xl">
        <h1 className="text-4xl font-black mb-4 text-gray-100">Nutraide App</h1>
        <p className="text-gray-300 text-xl mb-8">
          We're working to make this App to come to life! Stay tuned 🚀🌟
          <br/>
          <section className="text-sm">Click on the health potion to try the calculator out!</section>
        </p>
        <div className="flex flex-1 space-x-4">
          <a className="rounded-full h-12 w-12 flex items-center justify-center bg-gray-700 hover:translate-y-2" href="https://github.com/AbhijithGanesh/Nutraide.git" target='__blank'>
            <AiFillGithub className="text-white text-4xl" />
          </a>
          <a className="rounded-full h-12 w-12 flex items-center justify-center bg-gray-700 hover:translate-y-2" href="/login">
            <CiLogin className="text-white text-4xl" />
          </a>
          <a className="rounded-full h-12 w-12 flex items-center justify-center bg-gray-700 hover:translate-y-2" href='/docs' target='__blank'>
            <TbApi className="text-white text-4xl" />
          </a>
          <a className="rounded-full h-12 w-12 flex items-center justify-center bg-gray-700 hover:translate-y-2" href="https://nutriai-url.vercel.app/" target='__blank'>
            <GiHealthPotion className="text-white text-4xl" />
          </a>
          <a className="rounded-full h-12 w-12 flex items-center justify-center bg-gray-700 hover:translate-y-2" href="/form" target='__blank'>
            <CiStethoscope className="text-white text-4xl" />
          </a>
        </div>
        <p className="text-gray-300 text-sm mt-8">&copy; {currentDate.getFullYear()} Team Squiggly Kraken.</p>
        <p className="text-gray-300 text-xs my-0">Abhijith G, Jesher Joshua, Jaskaran Walia and Sree Dananjay</p>
      </div>
    </div >
  );
};

export default ComingSoonPage;
