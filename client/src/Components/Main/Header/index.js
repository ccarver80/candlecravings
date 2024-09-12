import React from "react";

export const Header = () => {
  return (
    <>
      <div className="grid grid-cols-3  h-20 w-full">
        <div className="flex">
          <h1 className="ml-20 my-auto text-2xl">Candle Cravings</h1>
        </div>
        <div className="flex">
          {/* <h1 className="ml-20 my-auto text-2xl">"Crave The Glow"</h1> */}
        </div>
        <div className="flex">
          {/* <h1 className="ml-20 my-auto text-2xl">Home</h1>
          <h1 className="ml-20 my-auto text-2xl">About</h1>
          <h1 className="ml-20 my-auto text-2xl">Shop</h1> */}
        </div>
      </div>
    </>
  );
};
