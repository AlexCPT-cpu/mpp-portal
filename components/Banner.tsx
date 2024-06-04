import Image from "next/image";

const Banner = () => {
  return (
    <div className="bg-[#071646] py-4 px-20 flex flex-row justify-between items-center">
      <div className="flex flex-row items-center space-x-3">
        <div className="w-1.5 h-12 bg-[#96B7E0] rounded-2xl" />

        <div>
          <div className="font-[700] text-xl text-white whitespace-nowrap">
            JOIN OUR MENTOR COMMUNITY
          </div>
          <div className="font-[700] text-xl text-white whitespace-nowrap">
            REPRESENTING TOP PRIME CONTRACTORS
          </div>
        </div>
      </div>

      <div className="flex flex-row space-x-0 items-center">
        <Image
          alt="window-img"
          className="w-[103.41px] h-[41.48px] object-contain"
          width={103.41}
          height={41.48}
          src="/bp.png"
        />
        <Image
          alt="window-img"
          className="w-[103.41px] h-[41.48px] object-contain"
          width={103.41}
          height={41.48}
          src="/boeing.png"
        />
        <Image
          alt="window-img"
          className="w-[103.41px] h-[41.48px] object-contain"
          width={103.41}
          height={41.48}
          src="/raytheon.png"
        />
        <Image
          alt="window-img"
          className="w-[103.41px] h-[41.48px] object-contain"
          width={103.41}
          height={41.48}
          src="/ibm.png"
        />
        <Image
          alt="window-img"
          className="w-[103.41px] h-[41.48px] object-contain"
          width={103.41}
          height={41.48}
          src="/lockhead.png"
        />
        <Image
          alt="window-img"
          className="w-[103.41px] h-[41.48px] object-contain"
          width={103.41}
          height={41.48}
          src="/l3haris.png"
        />
        <Image
          alt="window-img"
          className="w-[103.41px] h-[41.48px] object-contain"
          width={103.41}
          height={41.48}
          src="/more.png"
        />
      </div>
    </div>
  );
};

export default Banner;
