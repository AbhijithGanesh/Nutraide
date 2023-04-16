import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { CiLogin } from "react-icons/ci";
import { GiRunningNinja } from "react-icons/gi";
import { TbApi } from "react-icons/tb";

const ComingSoonPage: React.FC = () => {
  const currentDate = new Date();
  return (
    <section className="bg-gray-900 min-h-screen flex justify-center items-center section-2">
      <section className="max-w-lg mx-auto section-4 p-4 bg-gray-800 rounded-lg shadow-xl">
        <h1 className="text-4xl font-black mb-4 text-gray-100">
          Nutr-AI-de App
        </h1>
        <section className="text-gray-300 text-xl mb-8">
          We're working to make this App to come to life! Stay tuned 🚀🌟
          <br />
          <section className="text-sm">
            Click on the running Ninja to try the calculator out!
          </section>
        </section>
        <section className="flex flex-1 justify-center space-x-4">
          <a
            className="rounded-full h-12 w-12 flex items-center justify-center bg-gray-700 hover:translate-y-2"
            href="https://github.com/AbhijithGanesh/Nutraide.git"
            target="__blank"
          >
            <AiFillGithub className="text-white text-4xl" />
          </a>
          <a
            className="rounded-full h-12 w-12 flex items-center justify-center bg-gray-700 hover:translate-y-2"
            href="/users/login"
          >
            <CiLogin className="text-white text-4xl" />
          </a>
          <a
            className="rounded-full h-12 w-12 flex items-center justify-center bg-gray-700 hover:translate-y-2"
            href="/docs"
            target="__blank"
          >
            <TbApi className="text-white text-4xl" />
          </a>
          <a
            className="rounded-full h-12 w-12 flex items-center justify-center bg-gray-700 hover:translate-y-2"
            href="/calculator"
            target="__blank"
          >
            <GiRunningNinja className="text-white text-4xl" />
          </a>
        </section>
        <section className="text-gray-300 text-sm mt-8">
          &copy; {currentDate.getFullYear()} Team Squiggly Kraken.
        </section>
        <section className="text-gray-300 text-xs my-0">
          Abhijith G, Jesher Joshua, Jaskaran Walia and Sree Dananjay
        </section>
      </section>
    </section>
  );
};

export default ComingSoonPage;
