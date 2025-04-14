"use client";
import Image from "next/image";
import Logo from "@assets/svg/rwf-white.svg";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <header
      className="w-11/12 h-16 flex items-center justify-between rounded-3xl border-white/50
      border px-6 py-2 mt-4 mx-auto backdrop-blur-md"
    >
      <Link href="/" className="flex items-center">
        <Image src={Logo} alt="RapidWebForge Logo" width={40} height={40} />
        <span>RapidWebForge</span>
      </Link>
      <div className="flex items-center gap-4">
        <Link
          href="https://github.com/RapidWebForge/RapidWebForgeApp"
          target="_blank"
        >
          <FaGithub />
        </Link>
        <button>Descargar</button>
      </div>
    </header>
  );
};

export default Header;
