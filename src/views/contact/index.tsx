import { FC } from "react";
import { IoMailOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { MdPerson } from "react-icons/md";

interface DeveloperInfo {
  name: string;
  email: string;
  github: string;
}

const DeveloperInfo: FC<DeveloperInfo> = ({ name, email, github }) => {
  return (
    <div className="flex flex-col gap-1 text-xs">
      <div className="flex items-center gap-2">
        <MdPerson />:<p>{name}</p>
      </div>
      <div className="flex items-center gap-2">
        <IoMailOutline />:<a href={`mailto:${email}`}>{email}</a>
      </div>
      <div className="flex items-center gap-2">
        <FaGithub />:
        <a href={github} target="_blank">
          {github}
        </a>
      </div>
    </div>
  );
};

const ContactView = () => {
  const developers = [
    {
      name: "Sebastián Lévano",
      email: "lecav30@outlook.com",
      github: "https://github.com/lecav30",
    },
    {
      name: "Rodrigo Sabino",
      email: "rodrigosabinoramirez@gmail.com",
      github: "https://github.com/RodriSabino",
    },
  ];

  return (
    <div className="flex-1 flex flex-col items-center justify-center">
      {/* Formulario de contacto */}
      <div className="lg:max-w-2xl max-w-10/12 flex flex-col md:mt-0 mt-10">
        <b className="text-center">
          ¿Tienes preguntas, sugerencias o encontraste algún problema?
        </b>
        <p className="mt-2 text-sm text-center">
          Escríbenos a través de este formulario. Nos encantaría saber tu
          opinión sobre RapidWebForge y cómo podemos seguir mejorando la
          experiencia.
        </p>
        <form action="" className="flex flex-col gap-5 mt-15">
          <div className="flex md:flex-row flex-col gap-10">
            <div className="flex flex-col gap-5 flex-1/2">
              <label htmlFor="">Nombre</label>
              <input
                type="text"
                className="border-b focus:outline-none placeholder:text-gray-400"
                placeholder="John Doe"
              />
            </div>
            <div className="flex flex-col gap-5 flex-1/2">
              <label htmlFor="">Correo electrónico</label>
              <input
                type="text"
                className="border-b focus:outline-none placeholder:text-gray-400"
                placeholder="john.doe@example.com"
              />
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <label htmlFor="">Mensaje</label>
            <textarea
              name=""
              id=""
              className="border-b focus:outline-none placeholder:text-gray-400 resize-none"
              placeholder="Escribe aquí tu mensaje"
            ></textarea>
          </div>
          <button
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold
            px-6 py-3 rounded-lg transition w-fit mx-auto"
            type="submit"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
      {/* Información de desarrolladores */}
      <div className="lg:max-w-2xl max-w-10/12 flex flex-col mt-10">
        <p className="text-sm">
          Si encuentras algún <b>problema</b> o tienes una <b>sugerencia</b>,
          puedes abrir un{" "}
          <a
            href="https://github.com/RapidWebForge/RapidWebForgeApp/issues"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500"
          >
            issue
          </a>{" "}
          en GitHub. ¿Te gustaría colaborar en el desarrollo de RapidWebForge?
          ¡Estás invitado a contribuir directamente desde nuestro repositorio en{" "}
          <a
            href="https://github.com/RapidWebForge/RapidWebForgeApp"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500"
          >
            GitHub!
          </a>
        </p>

        <p className="text-sm mt-10">
          En caso quieras comunicarte directamente con los desarrolladores,
          puedes hacerlo a través de:
        </p>

        <div
          className="flex sm:flex-row flex-col sm:justify-between sm:max-w-full max-w-8/12
          sm:mx-0 mx-auto sm:gap-10 gap-3 my-5"
        >
          {developers.map((developer) => (
            <DeveloperInfo
              key={developer.name}
              name={developer.name}
              email={developer.email}
              github={developer.github}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactView;
