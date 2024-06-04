import Image from "next/image";
import Link from "next/link";

function Nav() {
  return (
    <nav className="w-full flex justify-between z-20">
      <div></div>
      <div className="flex flex-row w-full items-center space-x-24 justify-end p-10">
        <Link href="#" className="text-[#FFFFFFB2] text-xl">
          <Image
            width={100}
            height={100}
            src="/mppsummit.png"
            className="object-contain w-[140px] h-[17.5px]"
            alt="mpp-image"
          />
        </Link>

        <Link href="#" className="text-[#FFFFFFB2] text-xl">
          Resources
        </Link>
        <Link href="#" className="text-[#FFFFFFB2] text-xl">
          Login
        </Link>
        <Link href="#" className="text-[#FFFFFFB2] text-xl">
          Register
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
