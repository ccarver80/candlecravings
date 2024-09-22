import Header from "../ui/header/header";

export default function Blog() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <div className="relative">
          <Header />
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

        <h2 className="mx-auto text-2xl mt-10">Blog</h2>
        <h2 className="mx-auto text-2xl mt-10">Coming soon!!!</h2>
      </div>
    </div>
  );
}
