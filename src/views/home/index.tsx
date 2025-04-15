"use client";
import Image from "next/image";
import Logo from "@assets/svg/rwf-white.svg";
import { FaDownload } from "react-icons/fa";
import Link from "next/link";

const HomeView = () => {
  return (
    <div className="flex-1 flex items-center justify-center">
      {/* Content */}
      <div className="flex-1/2 flex flex-col items-end">
        <div className="md:w-10/12 flex flex-col mx-10 md:mx-0">
          <h1 className="text-5xl font-bold font-space-mono">RapidWebForge</h1>
          <h3 className="text-lg mt-1 font-semibold uppercase tracking-[0.32em]">
            Plataforma Low-Code RAD
          </h3>
          <div className="text-sm mt-5 mb-10 font-ibm-plex-mono">
            <b>Crea aplicaciones web sin escribir código.</b>
            <p>
              RapidWebForge es una plataforma Low-Code con enfoque RAD (Rapid
              Application Development) que te permite construir proyectos web
              frontend y backend en minutos, sin necesidad de conocimientos
              avanzados de programación.
            </p>
            <p className="mt-2">
              Aprende mientras creas gracias a los tutoriales integrados y el
              modo lectura del código generado, compatible con Visual Studio
              Code.
            </p>
            <p className="mt-2">
              Gestiona modelos, bases de datos y funcionalidades desde una
              interfaz visual moderna e intuitiva.
            </p>
          </div>
          <div>
            <p className="mb-2">Ahora puedes descargar la versión 1.0.0</p>
            <Link
              href={`https://github.com/RapidWebForge/RapidWebForgeApp/releases/download/${process.env.NEXT_PUBLIC_INSTALLER_VERSION}/RapidWebForgeInstaller.exe`}
              className="bg-main hover:bg-blue-700 text-white font-bold py-2 px-4 rounded
              flex gap-2 items-center w-fit"
            >
              <span className="font-space-mono">Descargar</span>
              <FaDownload />
            </Link>
          </div>
          <p className="text-xs mt-5">Solo disponible para Windows 11*</p>
        </div>
      </div>
      {/* Logo */}
      <div className="flex-1/2 hidden md:block">
        <Image src={Logo} alt="RapidWebForge Logo" width={650} height={650} />
      </div>
    </div>
  );
};

export default HomeView;
