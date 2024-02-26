import Image from "next/image";
import React from "react";
import { teamPng } from "../../public";
import { Crimson_Text } from "next/font/google";

const crimson = Crimson_Text({
  weight: "400",
  subsets: ["latin"],
  fallback: "sans-serif",
});

const About = () => {
  return (
    <div
      className={`${crimson.className} flex flex-col lg:flex-row gap-5 justify-evenly items-center p-4`}
    >
      <div className="w-full flex flex-col p-2 justify-center items-center ">
        <div className="max-w-[400px] lg:text-pretty">
          <h1 className="text-white font-extrabold text-4xl">
            Sobre Nosotros
          </h1>
          <p className="text-white text-xl">
            Somos una agencia que desarolla sitios webs para que emprendedores
            Argentinos aumenten su presencia en linea. Muchos Argentinos no
            tienen un sitio web para demostrar sus servicio o producto y
            nosotros estamos dedicado a cambiar eso. Los sitio webs facilita la
            interacion con los clientes y habilita un manera mas efficiente para
            conectarse con clientes!
          </p>
        </div>
      </div>
      <div className="max-w-lg p-6">
        <Image className="rounded-3xl shadow-lg shadow-black" src={teamPng} />
      </div>
    </div>
  );
};

export default About;
