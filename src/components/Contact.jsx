import Image from "next/image";
import React from "react";
import { teamPng } from "../../public";

const Contact = () => {
  return (
    <div className=" w-full flex justify-evenly">
      <div className="max-w-lg p-24 hidden lg:flex ">
        <Image src={teamPng} />
      </div>
      <div>
        <form className="flex-col flex items-center justify-center gap-5 p-20">
          <label className="font-bold text-xl text-white">Nombre:</label>
          <input
            placeholder="Nombre"
            className="bg-transparent border-b-2 focus:border-b-slate-600 outline-none transition duration-300 text-white"
          />
          <label className="font-bold text-xl text-white">
            Correo Electronico
          </label>
          <input
            placeholder="Correo"
            type="email"
            className="bg-transparent border-b-2 focus:border-b-slate-600 outline-none transition duration-300 text-white"
          />
          <label className="font-bold text-xl text-white">Mensaje </label>
          <input
            placeholder="Ej: Me gustaria saber mas"
            type="text"
            className="bg-transparent border-b-2 focus:border-b-slate-600 outline-none transition duration-300 text-white"
          />
          <div className="flex items-center justify-center">
            <button className="bg-black rounded-xl text-white p-2 mt-5 hover:bg-white hover:text-black hover:translate-y-3 transition duration-300">
              Enviar Ahora
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
