import React from "react";

type Props = {};

export default function NavBar({}: Props) {
  return (
    <nav className="bg-white rounded-md sticky top-0  m-2 p-3  lg:w-[95%] ">
      <div>
        <h1 className="text-blue-500 font-bold">Weather-app</h1>
      </div>
    </nav>
  );
}
