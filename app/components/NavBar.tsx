import React from "react";

import { IoSunny } from "react-icons/io5";
import { MdLocationSearching } from "react-icons/md";

type Props = {};

export default function NavBar({}: Props) {
  return (
    <nav className="bg-white flex flex-row  justify-between rounded-md sticky top-0  m-2 p-3  lg:w-[95%] ">
      <div className="flex flex-row  gap-4 ">
        <h1 className="text-blue-500 font-bold">Weather-app</h1>
        <IoSunny className="text-green-500 text-4xl    " />
      </div>

      <div className="flex justify-end  ">
        <MdLocationSearching className="flex text-3xl cursor-pointer hover:bg-green-400  text-green-500" />
      </div>
    </nav>
  );
}
