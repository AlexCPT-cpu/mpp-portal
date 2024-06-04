import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";

const Summit = () => {
  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center bg-[#2b4a94] -z-10"
      style={{ backgroundImage: "url('/bg2.png')" }}
    >
      <div className="absolute inset-0 bg-black opacity-30 -z-20"></div>

      <div className="z-20 w-full text-center font-[900] text-[34px] text-white pt-10">
        Network with current and potential Mentors and
        <br /> Protégés at the annual
        <span className="text-[#edcf3a]"> Mentor-Protégé Summit</span>.
      </div>
      <div className="flex w-full justify-center items-center mt-12 flex-col">
        <Image src="/mpps.png" alt="mpps-img" width={500} height={156} />

        <Image
          src="/july.png"
          alt="july-img"
          width={500}
          height={156}
          className="mt-14"
        />

        <Button className="bg-[#edcf3a] text-black px-12 py-6 rounded-sm mt-14 cursor-pointer">
          REGISTER NOW
          <ArrowRightIcon
            height={22}
            width={22}
            className="W-[28px] h-[28px] text-black ml-2 stroke-2 cursor-pointer"
          />
        </Button>
        <div className="w-full flex justify-center items-center">
          <Image
            src="/detroit.png"
            alt="detroit-img"
            width={700}
            height={271}
            className="mt-14 w-[85%] h-fit"
          />
        </div>
        <div className="absolute bottom-0 z-40 w-[100%]">
          <Image
            src="/skyline.png"
            alt="skyline-img"
            width={700}
            height={271}
            className="mt-14 w-[100%] h-fit"
          />
        </div>
      </div>
    </div>
  );
};

export default Summit;
