import Logo from "./Logo";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import Link from "next/link";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import Links from "./Links";

const Footer = () => {
  return (
    <div
      className="w-full h-full font-[400] text-[20px] px-24 py-20 text-white"
      style={{
        backgroundImage:
          "linear-gradient(99.59deg, #0B1E5A -2.14%, #172E77 100.3%)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full h-full px-20">
        <div className="flex flex-row justify-between items-center">
          <div>
            <Logo />
          </div>

          <div className="flex flex-col text-white items-center text-center">
            <div className="flex flex-row text-white items-center text-center space-x-7">
              <div>Ready to take your company to the next level?</div>
              <div className="flex flex-row items-center justify-center">
                <Button className="bg-[#edcf3a] text-black px-12 py-6 rounded-sm cursor-pointer">
                  START YOUR MPP JOURNEY NOW
                  <ArrowRightIcon
                    height={22}
                    width={22}
                    className="W-[28px] h-[28px] text-black ml-2 stroke-2 cursor-pointer"
                  />
                </Button>
              </div>
            </div>
            <div className="h-[1px] w-full bg-white rounded-2xl mt-12" />
          </div>
        </div>

        <div className="mt-14 flex flex-row space-x-32">
          <div>
            <div className="font-[900] text-[24px]">Get Connected</div>
            <div className="text-[18px] mt-2">
              Have someone reach out with more information about MPP:
            </div>

            <div className="w-full">
              <div className="flex flex-row justify-between space-x-4 mt-5">
                <div className="w-full">
                  <Input
                    className="border-[#FFFFFF3B] placeholder:text-slate-400 bg-[#FFFFFF1A] rounded-sm py-6 w-full"
                    placeholder="First Name"
                  />
                </div>
                <div className="w-full">
                  <Input
                    className="border-[#FFFFFF3B] placeholder:text-slate-400 bg-[#FFFFFF1A] rounded-sm py-6 w-full"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="flex flex-row justify-between space-x-4 mt-5">
                <div className="w-full">
                  <Input
                    type="email"
                    className="border-[#FFFFFF3B] placeholder:text-slate-400 bg-[#FFFFFF1A] rounded-sm py-6 w-full"
                    placeholder="Email Address"
                  />
                </div>
                <div className="w-full">
                  <Input
                    type="tel"
                    className="border-[#FFFFFF3B] placeholder:text-slate-400 bg-[#FFFFFF1A] rounded-sm py-6 w-full"
                    placeholder="Phone"
                  />
                </div>
              </div>

              <div className="w-full mt-5 flex">
                <Input
                  className="border-[#FFFFFF3B] placeholder:text-slate-400 bg-[#FFFFFF1A] rounded-sm py-6 w-full"
                  placeholder="Organization Name"
                />
              </div>

              <div className="flex flex-row justify-between space-x-4 mt-5">
                <div className="w-[85%]">
                  <Textarea
                    className="border-[#FFFFFF3B] placeholder:text-slate-400 bg-[#FFFFFF1A] rounded-sm py-6 w-full"
                    placeholder="Message..."
                  />
                </div>
                <div className="w-[15%]">
                  <Button className="bg-[#edcf3a] w-[74px] h-full text-black px-1 py-6 rounded-sm cursor-pointer">
                    <ArrowRightIcon
                      height={22}
                      width={22}
                      className="W-[28px] h-[28px] text-black ml-2 stroke-2 cursor-pointer"
                    />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-3 text-[17px] font-[400] pt-11 pl-[350px] justify-start items-start">
            <Link href="#">How to Participate</Link>
            <Link href="#">Eligibility Requirements</Link>
            <Link href="#"> MPP Resources</Link>
            <Link href="#">Browse Approved Mentor List</Link>

            <Link href="#">Why we have MPP </Link>
            <Link href="#"> DoD OSBP Contacts </Link>
            <Link href="#"> FAQs</Link>
          </div>
        </div>

        <div className="w-full justify-end items-end">
          <Links />
        </div>
      </div>
    </div>
  );
};

export default Footer;
