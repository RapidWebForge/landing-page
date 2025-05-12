"use client";
import Link from "next/link";
import { FaDownload } from "react-icons/fa";

const ValidationView = () => {
  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">
          Participa en la validación de RapidWebForge
        </h2>
        <p className="mb-10 text-sm">
          Ayúdanos a mejorar RapidWebForge completando los siguientes pasos. Tu
          experiencia antes y después de usar la aplicación es clave para seguir
          mejorándola.
        </p>

        <div className="space-y-6">
          {/* Paso 1 */}
          <div>
            <h3 className="text-lg font-semibold mb-2">1. 📝 Antes de usar</h3>
            <p className="mb-2 text-sm">
              Completa el formulario previo para contarnos tus expectativas.
            </p>
            <Link
              href="https://forms.gle/WrUgvSNzHxz9yQmV9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded
            hover:bg-blue-700 transition text-sm"
            >
              Llenar formulario pre-uso
            </Link>
          </div>

          {/* Paso 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-2">
              2. 💻 Descargar RapidWebForge
            </h3>
            <p className="mb-2 text-sm">
              Prueba la aplicación y explora sus funcionalidades.
            </p>
            <Link
              href={`https://github.com/RapidWebForge/RapidWebForgeApp/releases/download/${process.env.NEXT_PUBLIC_INSTALLER_VERSION}/RapidWebForgeInstaller.exe`}
              className="bg-main hover:bg-blue-700 text-white py-2 px-4 rounded
              flex gap-2 items-center w-fit text-sm"
            >
              <span className="font-space-mono">Descargar</span>
              <FaDownload />
            </Link>
          </div>

          {/* Paso 3 */}
          <div>
            <h3 className="text-lg font-semibold mb-2">
              3. ✅ Después de usar
            </h3>
            <p className="mb-2 text-sm">
              Cuéntanos tu experiencia con la herramienta.
            </p>
            <Link
              href="https://forms.gle/3YabjC4Nctx4QMdS6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-indigo-600 text-white px-6 py-2 rounded
              hover:bg-indigo-700 transition text-sm"
            >
              Llenar formulario post-uso
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValidationView;
