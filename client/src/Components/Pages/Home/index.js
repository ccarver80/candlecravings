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
          <h2 className="mx-auto mt-5 text-2xl">
            Homeade candles made in North Dakota
          </h2>
          <p className="mx-auto mt-2 text-xl">
            Inspired by the simple pleasures of good food and great company, my
            candles aim to turn everyday spaces into deliciously scented havens.
          </p>
          <div className="mx-auto mt-10 border p-10 gap-3 flex flex-col">
            <h2 className="font-bold text-2xl">Updates:</h2>
            <p>
              <b>9/12/2024:</b>
              <br></br>
              <pre>
                &emsp;Still in the creative stages, testing candles and wick
                sizes trying to find best combination, and researching the best
                practices.
              </pre>
            </p>
            <p>
              <b>9/10/2024:</b>
              <br></br>
              <pre>
                &emsp;Facebook Page created, domain name bought. Start working
                on website.
              </pre>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
