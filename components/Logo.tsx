import Image from "next/image";

const Logo = () => {
  return (
    <Image
      priority
      alt="logo"
      width={150}
      height={150}
      src="/logo.png"
      className="z-20 w-[130px] h-[130px]"
    />
  );
};

export default Logo;
