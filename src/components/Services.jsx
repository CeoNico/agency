"use client";
import { services } from "@/const";
import FadeIn from "@/const/FadeIn";
import { motion } from "framer-motion";
import Image from "next/image";

const Test = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 ">
      {services.map((service) => (
          <div key={service.title} className="p-4 items-center">
            <div className="h-96 ">
              <h1 className="text-center font-bold text-white text-xl">
                {service.title}
              </h1>
              <p className="text-center text-balance p-2 text-white text-lg">
                {service.subtitle}
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Image
                className="rounded-full "
                height={200}
                width={200}
                src={service.img}
              />
            </div>
          </div>
      ))}
    </div>
  );
};

export default Test;
