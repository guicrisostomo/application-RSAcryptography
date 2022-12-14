import { NextPage } from "next";
import React from "react";

interface Props {
  children?: React.ReactNode;
  onClick: Function;
}

const Button: NextPage<Props> = (props, onClick) => {
  return (
    <div className="items-center w-full flex place-content-center">
      <button
        onClick={onClick}
        type="submit"
        className="p-[10px] w-11/12 bg-stone-800 rounded-xl text-white text-lg border-black border-2 flex items-center place-content-center hover:bg-white hover:text-black"
      >
        {props.children}
      </button>
    </div>
  );
};

export default Button;
