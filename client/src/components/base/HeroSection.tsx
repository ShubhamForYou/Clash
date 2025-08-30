import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
export default function HeroSection() {
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col">
      <div>
        <Image src="/banner_img.svg" width={600} height={600} alt="Banner" />
      </div>
      <div className="text-center">
        <h1 className="text-6xl md:text-7xl lg:text-9xl font-extrabold bg-gradient-to-b from-green-300 to-gray-700 text-transparent bg-clip-text">
          Clash
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl font-bold text-center mt-2 mb-2">
          On Clash, We Discover the Better Choice — Together.
        </p>
        <Link href="/login"><Button className="bg-green-950">Start Free</Button></Link>
        
      </div>
    </div>
  );
}
