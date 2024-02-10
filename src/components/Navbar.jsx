import Link from "next/link";
import { HiBars3 } from "react-icons/hi2";
import { navLinks } from "@/const";

const Navbar = () => {
  return (
    <nav className=" flex mt-2 lg:h-20 lg:items-center lg:justify-center lg:mr-44">
      <div className="lg:mr-44">
        <Link
          href="/"
          className="text-white font-bold text-2xl hover:text-gray-600 transition duration-500 p-4"
        >
          Excellence.
        </Link>
      </div>
      <div className=" hidden lg:flex w-full font-semibold justify-evenly bg-gray-400 bg-opacity-50 rounded-full ml-auto p-4 ">
        {navLinks.map((link) => (
          <Link
            className="text-orange-500 flex justify-center items-center hover:text-black transition duration-300 ease-in-out"
            key={link.label}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className="text-white ml-auto p-2 flex items-center justify-center">
        <HiBars3 size={25} />
      </div>
    </nav>
  );
};

export default Navbar;
