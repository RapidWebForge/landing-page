import Link from "next/link";
import { FaDownload, FaGithub } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

interface MenuProps {
  show: boolean;
  onClose: VoidFunction;
}

const Menu = ({ show, onClose }: MenuProps) => {
  if (show)
    return (
      <div
        className="bg-black/80 h-screen w-screen absolute -top-4 -left-4 sm:-left-8 flex 
        justify-center items-center md:hidden"
      >
        <div
          className="border border-white/60 relative w-10/12 min-h-8/12 backdrop-blur-lg
          flex flex-col justify-center items-center gap-20 bg-white/20 rounded-3xl px-6 py-4"
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute top-8 right-8 cursor-pointer"
          >
            <IoClose size={20} />
          </button>
          <div className="flex flex-col items-center gap-5">
            <Link href="/" onClick={onClose}>
              Home
            </Link>
            <Link
              href="/validation"
              onClick={onClose}
              className="font-mono text-green-400 animate-pulse font-semibold"
            >
              Validación
            </Link>
            <Link
              href="https://rapidwebforge-docs.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
            >
              Documentación
            </Link>
            <Link href="/contacto" onClick={onClose}>
              Contacto
            </Link>
          </div>
          <div className="flex gap-3 mx-auto">
            <Link
              href="https://github.com/RapidWebForge/RapidWebForgeApp"
              target="_blank"
              onClick={onClose}
            >
              <FaGithub scale={20} />
            </Link>
            <Link
              href={`https://github.com/RapidWebForge/RapidWebForgeApp/releases/download/${process.env.NEXT_PUBLIC_INSTALLER_VERSION}/RapidWebForgeInstaller.exe`}
              onClick={onClose}
            >
              <FaDownload scale={20} />
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Menu;
