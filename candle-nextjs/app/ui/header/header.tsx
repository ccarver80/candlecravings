import Link from "next/link";
import Image from "next/image";
import candleImg from "@/public/imgs/candle.jpg";

export default function Header() {
  return (
    <>
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
      <div className="grid relative backdrop-brightness-40 z-10 text-black grid-cols-2 h-20">
        <div className=" text-white flex">
          <h1 className="ml-20 my-auto text-4xl p-2 ">Candle Cravings</h1>
        </div>

        <div className=" text-white flex">
          <Link
            href="/"
            className="hover:text-blue-400 hover:underline ml-20 my-auto text-2xl"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="hover:text-blue-400 hover:underline ml-20 my-auto text-2xl"
          >
            About
          </Link>

          <Link
            href="/blog"
            className="hover:text-blue-400 hover:underline ml-20 my-auto text-2xl"
          >
            Blog
          </Link>
          <h1 className="text-gray-400 ml-20 my-auto text-xl">
            Shop (Coming Soon!)
          </h1>
        </div>
      </div>
    </>
  );
}
