import React from "react";
import { Header } from "../../Main/Header";

export const Home = () => {
  return (
    <>
      <div className="flex flex-col h-screen bg-candle bg-no-repeat bg-cover bg-center bg-fixed ">
        <Header />
        <div className="flex flex-col">
          <h1 className="mx-auto mt-20 text-4xl">Candle Cravings</h1>
          <h2 className="mx-auto mt-5 text-2xl">"Crave The Glow!"</h2>
          <h2 className="text-6xl mt-20 mx-auto">Comming Soon!</h2>
        </div>
      </div>
    </>
  );
};
