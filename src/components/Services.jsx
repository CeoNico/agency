"use client";
import { services } from "@/const";
import FadeIn from "@/const/FadeIn";
import { motion } from "framer-motion";
import Image from "next/image";
import { DM_Serif_Display } from "next/font/google";
import ServiceCard from "./ServiceCard";

const serif = DM_Serif_Display({
  fallback: ["sans-serif"],
  weight: "400",
  subsets: ["latin"],
});

const Test = () => {
  return (
    <section className={`${serif.className} grid grid-cols-1 lg:grid-cols-4`}>
      {services.map((service) => (
        <div className="flex p-2 " key={service.title}>
          <ServiceCard
            imgUrl={service.img}
            title={service.title}
            s
            subtitle={service.subtitle}
          />
        </div>
      ))}
    </section>
  );
};

export default Test;
