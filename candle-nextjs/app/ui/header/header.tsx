import Link from "next/link";

export default function Header() {
  return (
    <div className="grid grid-cols-3 h-20 w-full">
      <div className="flex">
        <h1 className="ml-20 my-auto text-2xl">Candle Cravings</h1>
      </div>
      <div className="flex"></div>
      <div className="flex">
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
  );
}
