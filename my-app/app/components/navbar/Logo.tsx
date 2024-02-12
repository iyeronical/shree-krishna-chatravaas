'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
    const router = useRouter();
  return (
    <Image 
        src='./images/skc.svg'
        alt="Logo"
        className="hidden md:block cursor-pointer"
        height={10}
        width={80}
    />
  )
}

export default Logo