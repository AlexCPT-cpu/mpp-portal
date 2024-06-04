import Jumbotron from "./Jumbotron";
import Logo from "./Logo";
import Nav from "./Nav";

const Hero = () => {
  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center bg-[#2b4a94] -z-10"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      <div className="absolute inset-0 bg-black opacity-30 -z-20"></div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <Nav />
      </div>
      <div className="z-2 pl-24 mt-10">
        <Logo />
        <Jumbotron />
      </div>
    </div>
  );
};

export default Hero;
