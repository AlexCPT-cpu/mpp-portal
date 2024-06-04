import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Mentors from "@/components/Mentors";
import Summit from "@/components/Summit";
import { cn } from "@/lib/utils";
import { Lato } from "next/font/google";

const font = Lato({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Home() {
  return (
    <main
      className={cn(
        "lg:flex min-h-screen flex-col items-center justify-between hidden",
        font.className
      )}
    >
      <Hero />
      <div className="min-h-screen w-full">
        <Banner />
        <div className="w-full">
          <Mentors />
        </div>
        <div className="w-full">
          <Summit />
        </div>
        <div className="w-full">
          <Footer />
        </div>
      </div>
    </main>
  );
}
