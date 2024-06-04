import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";

const Left = () => {
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
      <div className="text-white justify-center mx-auto">
        <span className="text-[#edcf3a]">Mentors</span> shape careers,
        <br /> fortify the defense industry, <br />
        and foster connections.
      </div>
      <div className="text-white text-[20px] mt-10 justify-center mx-auto">
        Mentors partner with small businesses to <br /> help enhance their
        capabilities to perform as <br /> subcontractors and viable suppliers
        under
        <br />
        DoD contracts as well as other federal
        <br /> government and commercial contracts.
      </div>

      <div className="bg-[#0C3C91] flex flex-row rounded-xl p-4 items-center space-x-8 mt-10">
        <Image
          src="/connect.png"
          alt="connect-img"
          width={62.2}
          height={62.18}
        />

        <div className="font-[700] text-[18px] text-white">
          Develop a high-quality
          <br /> subcontracting pool
        </div>
      </div>

      <div className="bg-[#0C3C91] flex flex-row rounded-xl p-4 items-center space-x-8 mt-10">
        <Image src="/cash.png" alt="cash-img" width={62.2} height={62.18} />

        <div className="font-[700] text-[18px] text-white">
          Receive cost reimbursement
          <br /> and a credit toward small <br /> business contracting goals
        </div>
      </div>

      <div className="bg-[#0C3C91] flex flex-row rounded-xl p-4 items-center space-x-8 mt-10">
        <Image src="/flag.png" alt="connect-img" width={62.2} height={62.18} />

        <div className="font-[700] text-[18px] text-white">
          Pursue new market opportunities
          <br /> as part of a team
        </div>
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

export default Left;
