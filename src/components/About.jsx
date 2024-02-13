import Image from "next/image";
import React from "react";
import { teamPng } from "../../public";

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-5 justify-evenly items-center">
      <div className="w-full flex flex-col p-2 justify-center items-center ">
        <h1 className="text-white text-center text-2xl font-bold p-4">
          Sobre Nosotros
        </h1>
        <div className="lg:w-[400px] lg:text-pretty">
        <p className="text-white text-xl font-light">
          Somos una agencia que desarolla sitios webs para que emprendedores
          Argentinos aumenten su presencia en linea.
          Muchos Argentinos no tienen un sitio web para demostrar sus servicio o
          producto y nosotros estamos dedicado a cambiar eso. Los sitio webs
          facilita la interacion con los clientes y habilita un manera mas
          efficiente para conectarse con clientes!
        </p>
        </div>
      </div>
      <div className="max-w-lg">
        <Image className="rounded-3xl shadow-lg shadow-black" src={teamPng} />
      </div>
    </div>
  );
};

export default About;
