import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";

const Right = () => {
  return (
    <div
      className="w-[50%] font-[900] text-[36px] px-24 py-20"
      style={{
        backgroundImage:
          "linear-gradient(99.59deg, #0B1E5A -2.14%, #172E77 100.3%)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-white justify-center mx-auto ml-10">
        <span className="text-[#edcf3a]">Protégés</span> receive <br />
        guidance from top <br />
        Prime Contractors.
      </div>
      <div className="text-white text-[20px] mt-10 ml-10">
        Protégés connect with experts from top <br /> Prime Contractor
        companies, receiving <br /> assistance with things like:
      </div>
      <div className="grid grid-cols-2">
        <div className="flex flex-col rounded-xl p-4 items-center space-x-8 mt-10 text-[13px] text-white text-center space-y-3">
          <Image
            src="/gear.png"
            alt="connect-img"
            width={85.59}
            height={84}
            className="mb-3"
          />
          Technical and/or
          <br /> management
          <br /> assistance
        </div>

        <div className="flex flex-col rounded-xl p-4 items-center space-x-8 mt-10 text-[13px] text-white text-center space-y-3">
          <Image
            src="/sit.png"
            alt="connect-img"
            width={85.59}
            height={84}
            className="mb-3"
          />
          General
          <br /> administrative
          <br /> assistance
        </div>

        <div className="flex flex-col rounded-xl p-4 items-center space-x-8 mt-10 text-[13px] text-white text-center space-y-3">
          <Image
            src="/hat.png"
            alt="connect-img"
            width={85.59}
            height={84}
            className="mb-3"
          />
          Training and <br />
          education
        </div>

        <div className="flex flex-col rounded-xl p-4 items-center space-x-8 mt-10 text-[13px] text-white text-center space-y-3">
          <Image
            src="/wheel.png"
            alt="connect-img"
            width={85.59}
            height={84}
            className="mb-3"
          />
          Business <br />
          development
        </div>
      </div>

      <div className="italic font-[400] text-[28.28px] text-white w-full justify-center mx-auto text-center">
        + MUCH MORE
      </div>
      <div className="w-full justify-center items-center mx-auto pl-24">
        <Button className="bg-[#edcf3a] text-black px-12 py-6 rounded-sm mt-8 cursor-pointer mx-auto justify-center text-center">
          LEARN MORE ABOUT PROTÉGÉS
          <ArrowRightIcon
            height={22}
            width={22}
            className="W-[28px] h-[28px] text-black ml-2 stroke-2 cursor-pointer"
          />
        </Button>
      </div>
    </div>
  );
};

export default Right;
