import Button from "./Button";

const Hero = () => {
  return (
    <div className="h-[500px] lg:h-full flex justify-evenly">
      <div className="bg-hero bg-cover bg-center w-full items-center flex justify-center">
        <div className="w-[80%] h-[70%] lg:w-[50%] bg-white/20 rounded-xl items-center justify-center -mt-20">
          <h1 className="p-2 text-white text-2xl text-center font-bold">
            Listo Para Llevar Tu Negocio Al Proximo Nivel?
          </h1>
          <p className="text-white font-light text-center text-lg p-2">
            Empeza la transicion hacia un mundo nuevo.... el mundo digital.
            Construi tu propio sitio web hoy! Sin ningun terciario{" "}
          </p>
          <div className="flex items-center justify-center py-5">
            <Button title={"Empezar Ahora"} href={"/"} bg={"bg-white"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
