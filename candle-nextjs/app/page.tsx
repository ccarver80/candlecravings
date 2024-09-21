import Image from "next/image";
import Header from "./ui/header/header";
import candleImg from "../public/imgs/candle.jpg";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <div className="relative">
          {" "}
          <Header />
          <div className=" -z-10">
            <Image
              priority
              src={candleImg}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              alt="candle background"
            />
          </div>
          <div className=" relative backdrop-brightness-40 font-bold h-80 text-white flex flex-col items-center">
            <h1 className="mx-auto mt-20 text-4xl">Candle Cravings</h1>
            <h2 className="mx-auto mt-5 text-2xl">"Crave The Glow!"</h2>
            <h2 className="mx-auto mt-5 text-2xl">
              Homeade candles made in North Dakota
            </h2>
            <p className="mx-auto mt-2 text-xl">
              Inspired by the simple pleasures of good food and great company,
              my candles aim to turn everyday spaces into deliciously scented
              havens.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-10 border p-10 gap-3 flex flex-col">
          <h2 className="font-bold text-2xl">Updates:</h2>

          <b>9/12/2024:</b>
          <br></br>
          <pre>
            <p>
              &emsp;Still in the creative stages, testing candles and wick sizes
              trying to find best combination, and researching the best
              practices.
            </p>{" "}
          </pre>

          <b>9/10/2024:</b>
          <br></br>
          <pre>
            <p>
              {" "}
              &emsp;Facebook Page created, domain name bought. Start working on
              website.
            </p>
          </pre>
        </div>
      </div>
    </div>
  );
}
