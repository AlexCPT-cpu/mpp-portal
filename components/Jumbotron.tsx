import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const Jumbotron = () => {
  return (
    <div className="mt-8 flex flex-row w-full justify-between items-center">
      <div>
        <div className="text-[#C9E1FF] font-[900] text-[24px] tracking-[.25em] leading-6">
          WELCOME TO THE
        </div>

        <div className="text-white font-extrabold text-[52px] whitespace-nowrap mt-4 z-50">
          Mentor-Protégé Program Portal
        </div>

        <div className="font-[400] text-[24px] text-white mt-6 w-[35%]">
          Easily access your
          <span className="text-[#edcf3a]"> Mentor-Protégé Program </span>(MPP)
          dashboard here. Whether you are a Mentor or a Protégé, your dashboard
          gives you access to everything you need for tracking and maintaining
          your partnerships.
        </div>
        <Button className="bg-[#edcf3a] text-black px-12 py-6 rounded-sm mt-8 cursor-pointer">
          LOGIN TO MY DASHBOARD
          <ArrowRightIcon
            height={22}
            width={22}
            className="W-[28px] h-[28px] text-black ml-2 stroke-2 cursor-pointer"
          />
        </Button>
        <div className="text-white pt-12 pb-10 text-lg">
          Updated SAM profile required. Need to update yours?
        </div>
        <Link
          className="text-white underline flex flex-row items-center space-x-3"
          href="https://sam.gov/content/home"
          rel="_noreferer"
        >
          CLICK HERE
          <ArrowRightIcon
            className="text-[#edcf3a] ml-2"
            width={20}
            height={20}
          />
        </Link>
      </div>
      <div className="z-40">
        <div className="absolute right-0 top-32 z-40">
          <Image
            priority
            alt="window-img"
            className="w-[800px] h-[900px] object-cover"
            width={500}
            height={500}
            src="/window.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
