import Image from "next/image";

const ServiceCard = ({ title, subtitle, src, bgColor }) => {
  return (
    <div className={`rounded-xl flex flex-col items-center gap-5 justify-evenly ${bgColor}`}>
      <div className="p-4 h-52 w=full">
        <h1 className="text-lg text-white font-bold text-center">{title}</h1>
        <p className="text-white text-lg text-center">{subtitle}</p>
      </div>
      <div className="items-center justify-center flex">
        <Image className="rounded-full h-44 w-44" src={src} />
      </div>
    </div>
  );
};

export default ServiceCard;
