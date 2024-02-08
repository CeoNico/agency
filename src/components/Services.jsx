import { computerPng, deskPng, rocketPng, teamPng } from "../../public";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="flex-col flex gap-5 h-fit">
      <h1 className="text-center text-white font-bold text-2xl lg:hidden p-4">Nuestros Servicios</h1>
      <div className="flex">
        <div className="hidden flex-col lg:flex h-full text-center p-4 gap-4">
          <h1 className="text-center text-white lg:text-4xl text-3xl font-bold py-5">
            Nuestros Servicios
          </h1>
          <h2 className="text-white text-xl">
            Encontra el servicio que te brinda la solucion deseada para tu
            problema
          </h2>
          <p className="text-white text-lg">
            Aqui podes ver nuestros servicios y como trabajmos para resolver
            ciertos problemas!
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 w-full h-fit gap-2">
          <ServiceCard
            bgColor=""
            title={"Desarollo Principal"}
            subtitle={
              "Nuestro servicio de desarollo cuenta en transforma tu idea a algo fiscal, donde tus clientes pueden visualizar tus servicios o productos"
            }
            src={computerPng}
          />
          <ServiceCard
            bgColor=""
            title={"Web Hosting"}
            subtitle={
              "Lanzamos tu proyecto hacia el internet. Si no fue desarollado por nosotros igual te ayudamos con nuestro servicio tecnico para lanzar tu idea hacia el mundo!"
            }
            src={rocketPng}
          />
          <ServiceCard
            bgColor=""
            title={"UX/UI"}
            subtitle={
              "No sos una persona creative? Suele pasar no te preocupes si no tenes un diseno vamos paso por paso para realizar un diseno en cual nuestro cliente este satisfecho!"
            }
            src={deskPng}
          />
          <ServiceCard
            bgColor=""
            title={"Marketing"}
            subtitle={
              "Queres crecer tu negocio con anuncios digital por facebook y instagram pero no sabes como? No te procupes que con podes contar con nostros para lanzar tu primer campana de anuncios por facebook o por google ads!"
            }
            src={teamPng}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
