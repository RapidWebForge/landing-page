"use client";
import Image from "next/image";
import Logo from "@assets/svg/rwf-white.svg";
import Link from "next/link";
import { FaDownload, FaGithub } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { useState } from "react";
import Menu from "../menu";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header
      className="w-11/12 h-16 flex items-center justify-between rounded-3xl border-white/50
      border px-6 py-2 mt-4 mx-auto backdrop-blur-md"
    >
      <Link href="/" className="flex items-center">
        <Image src={Logo} alt="RapidWebForge Logo" width={40} height={40} />
        <span>RapidWebForge</span>
      </Link>
      <button
        type="button"
        className="mr-2 md:hidden cursor-pointer focus:outline-none focus:ring-0"
        onClick={() => setShowMenu(!showMenu)}
      >
        <IoIosMenu size={20} />
      </button>
      <Menu show={showMenu} onClose={() => setShowMenu(false)}/>
      <div className="md:flex items-center gap-4 hidden">
        <Link
          href="https://rapidwebforge-docs.netlify.app/"
          target="_blank"
          className="mr-4"
        >
          Documentación
        </Link>
        <Link href="/contacto" className="mr-4">
          Contacto
        </Link>
        <Link
          href="https://github.com/RapidWebForge/RapidWebForgeApp"
          target="_blank"
        >
          <FaGithub />
        </Link>
        <Link
          href={`https://github.com/RapidWebForge/RapidWebForgeApp/releases/download/${process.env.NEXT_PUBLIC_INSTALLER_VERSION}/RapidWebForgeInstaller.exe`}
        >
          <FaDownload />
        </Link>
      </div>
    </header>
  );
};

export default Header;
